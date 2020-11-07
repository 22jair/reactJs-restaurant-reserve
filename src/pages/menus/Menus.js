import React, { useState, useContext } from "react";
import * as style from "./Menu.style";

import MenuSearch from "../../components/menuSearch/MenuSearch";
import ButtonSquare from "../../components/buttonSquare/ButtonSquare";
import CardMenu from "../../components/cardMenu/CardMenu";

import { CarGlobalContext } from "./../../context/contextCar/CarGlobalState"

import TipoMenuLocalData from "../../localData/TipoMenuLocalData";
import MenusLocalData from "../../localData/MenusLocalData";

export default function Menus() {

  const { menus, addMenu } = useContext(CarGlobalContext);

  const [textSearch, setTextSearch] = useState("");
  const platesAll = MenusLocalData;
  const [ plates, setPlates ] = useState(platesAll);
  const [categoryPlate, setCategoryPlate] = useState(TipoMenuLocalData[0]);

  const handleSearchMenu = () => {
    
    if(textSearch.trim().length <= 0) return alert("Ingrese al menus una letra");

    const searchList = [];
    platesAll.forEach( plate => {
      if(plate.name.toLowerCase().includes(textSearch.trim())){
        searchList.push(plate);
      }
    })
    setPlates(searchList);
  };

  const handlePlatesByCategory = (category) => {    
    setTextSearch('');
    if(category.id === 0) {
      setCategoryPlate(category);
      return setPlates(platesAll);    

    }
    const updatePlates = platesAll.filter( plate => plate.categoryMenu.id === category.id)    
    setPlates(updatePlates);    
    setCategoryPlate(category);
  };

  const handleAddToCard = async (plate) => {      
      addMenu(plate);      
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
            {TipoMenuLocalData.map((item, index) => (
              <ButtonSquare
                key={item.id}
                title={item.nombre}
                img={item.img}
                handleButtonSquare={() => handlePlatesByCategory(item)}
              />
            ))}
          </style.MenuTipoContainer>
      
      </style.MenuLeft>

      <style.MenuCenter>
        <style.MenuTitleContainer>
            <style.MenuTitle>{categoryPlate.nombre.toUpperCase()}</style.MenuTitle>
          <style.MenuTitleImg src={categoryPlate.img} />
        </style.MenuTitleContainer>

        <style.MenuListContainer>
              { plates.length <= 0
                ? "Ningun producto encontrado"
                : (
                  plates.map((item, index) => (
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
                  ))
                )
              }
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
