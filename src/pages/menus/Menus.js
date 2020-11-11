import React, { useState, useEffect, useContext } from "react";
import * as style from "./Menu.style";

import MenuSearch from "../../components/menuSearch/MenuSearch";
import ButtonSquare from "../../components/buttonSquare/ButtonSquare";
import CardMenu from "../../components/cardMenu/CardMenu";

import { CartGlobalContext } from "./../../context/contextCart/CartGlobalState";

import {
  BASE_URL,
  converCategoriesPlate,
  converPlates,
  DefaultCategoryPlateAll
} from "../../utils/Utils";

export default function Menus() {
  const { addMenu } = useContext(CartGlobalContext);
  const [textSearch, setTextSearch] = useState("");

  const [platesBackup, setPlatesBackup] = useState([]);
  const [plates, setPlates] = useState([]);
  const [categoriesPlate, setCategoriesPlate] = useState([]);
  const [categoryPlateSelected, setCategoryPlateSelected] = useState(DefaultCategoryPlateAll);

  useEffect(() => {
    getCategoriesPlate();
    getPlates();
  }, []);

  const getCategoriesPlate = async () => {
    const data = await fetch(BASE_URL + "platoCategorias").then((res) =>res.json());
    
    setCategoriesPlate(converCategoriesPlate(data));
   
    //setCategoryPlateSelected(categories[0])
  };
  const getPlates = async () => {
    const data = await fetch(BASE_URL + "platos").then((res) => res.json());

    converPlates(data).then( (res) => setPlatesBackup(res) )
    converPlates(data).then( (data) => setPlates(data) )      
  };

  const handleSearchMenu = () => {
    if (textSearch.trim().length <= 0)
      return alert("Ingrese al menus una letra");

    const searchList = [];
    platesBackup.forEach((plate) => {
      if (plate.name.toLowerCase().includes(textSearch.trim())) {
        searchList.push(plate);
      }
    });
    setPlates(searchList);
  };

  const handlePlatesByCategory = (category) => {
    setTextSearch("");

    if (category.id === 0) {   
      setPlates(platesBackup);
    } else {
      const updatePlates = platesBackup.filter(
        (plate) => plate.categoryMenu.id === category.id
      );
      setPlates(updatePlates);
    }

    setCategoryPlateSelected(category);
  };

  const handleAddToCard = async (plate) => {
    const menu = {
      quantity: 1,
      plate: plate,
      total: plate.price,
    };
    addMenu(menu);
  };

  return (
    <style.MenuContainer>
      <style.MenuLeft>
        <style.MenuSearchContainer>
          <MenuSearch
            textSearch={textSearch}
            setTextSearch={setTextSearch}
            handleSearchMenu={handleSearchMenu}
          />
        </style.MenuSearchContainer>

        <style.MenuTipoContainer>
        {categoriesPlate.length <= 0
            ? "Ninguna categoria encontrada"
            : categoriesPlate.map((item, index) => (
            <ButtonSquare
              key={item.id}
              title={item.name}
              img={item.urlPhoto}
              handleButtonSquare={() => handlePlatesByCategory(item)}
            />
          ))}
        </style.MenuTipoContainer>
      </style.MenuLeft>

      <style.MenuCenter>
        <style.MenuTitleContainer>
          <style.MenuTitle>
            {categoryPlateSelected.name.toUpperCase()}
          </style.MenuTitle>
          <style.MenuTitleImg src={categoryPlateSelected.urlPhoto} />
        </style.MenuTitleContainer>
         
            
        <style.MenuListContainer>
          {plates.length <= 0
            ? "Ningun producto encontrado"
            : plates.map((item, index) => (
                <CardMenu
                  key={item.id}
                  title={item.name}
                  img={item.urlPhoto}
                  desc={item.description}
                  price={item.price}
                  category={item.categoryMenu.name}
                  to={item.to}
                  handleClick={() => handleAddToCard(item)}
                />
              ))}
        </style.MenuListContainer>
      </style.MenuCenter>

      {/* <style.MenuRight>
        {   menus.map((item, index) => (
            <div key={index}> { item.plate.name } | { item.quantity } | {item.total} </div>
        ))}
      </style.MenuRight> */}
    </style.MenuContainer>
  );
}
