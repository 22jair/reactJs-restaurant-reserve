import React from "react";
import * as style from "./ListCart.style";
import { BiPlus, BiMinus, BiX } from 'react-icons/bi'

export default function ListCart({ menus, add, decrease, remove }) {
  return menus.length <= 0 ? (
    "No contiene productos en el carrito"
  ) : (
    <table style={{ width: "100%", maxWidth: "1000px"  }}>
      <thead>
        <tr style={{ color: "var(--main-gray  )" }}>
          <th style={{ width: "30%" }}>Producto</th>
          <th style={{ width: "15%" }}>Precio S/.</th>
          <th style={{ width: "25%" }}>Cantidad</th>
          <th style={{ width: "15%" }}>Total S/.</th>
          <th style={{ width: "15%" }}>Cancelar</th>
        </tr>
      </thead>
      <tbody style={{ marginTop: "20px !important" }}>
        {menus.map((menu, index) => (
          <style.ItemContainer key={index}>

            <style.ItemTd>

              <style.ProductoInfoContainer>
                
                <style.Image src={menu.plate.urlPhoto} />

                <style.InfoContainer>
                  <h4>{menu.plate.name}</h4>
                  <p>
                    {menu.plate.description}
                  </p>
                </style.InfoContainer>

              </style.ProductoInfoContainer>
              
            </style.ItemTd>

            <style.ItemTd>
              <div>s/.{menu.plate.price} </div>
            </style.ItemTd>

            <style.ItemTd>
              <div>
                <style.IconContainer onClick={ () => add(menu) } > <BiPlus/> </style.IconContainer>
                <div>{menu.quantity} </div>
                <style.IconContainer onClick={ () => decrease(menu) }> <BiMinus /> </style.IconContainer>
              </div>
            </style.ItemTd>

            <style.ItemTd>
              <div>s/.{menu.total}</div>
            </style.ItemTd>

            <style.ItemTd>
              <style.IconContainer onClick={() => remove(menu)}><BiX/></style.IconContainer>
            </style.ItemTd>
          </style.ItemContainer>
        ))}
      </tbody>
    </table>
  );
}
