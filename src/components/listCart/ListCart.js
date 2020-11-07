import React from "react";
import * as style from "./ListCart.style";

export default function ListCart({ menus }) {
  return menus.length <= 0 ? (
    "No contiene productos en el carrito"
  ) : (
    <table style={{ width: "100%", tableLayout: "auto"}}>
      <thead>
        <tr>
          <th style={{ width: "30%", border: "1px solid black" }}>
            Producto
          </th>
          <th style={{ width: "15%", border: "1px solid black" }}>
            Precio
          </th>
          <th style={{ width: "25%", border: "1px solid black" }}>
            Cantidad
          </th>
          <th style={{ width: "15%", border: "1px solid black" }}>
            Total
          </th>
          <th style={{ width: "15%", border: "1px solid black" }}>
            wtf
          </th>
        </tr>
      </thead>
      <tbody style={{ marginTop: "20px !important"}}>
        {menus.map((menu, index) => (
          <style.ItemContainer key={index}>
            <style.ItemTd>
                <div>
              <style.Image src={menu.plate.urlPhoto} />
              <style.InfoContainer>
                <style.Title>{menu.plate.name}</style.Title>
                <style.Description>{menu.plate.description}</style.Description>
              </style.InfoContainer>
              </div>
            </style.ItemTd>

            <style.ItemTd>
            <div>
                {menu.plate.price} </div>
            </style.ItemTd>

            <style.Quantity>
            <div>
              <div> + </div>
              <div>{menu.quantity} </div>
              <div> - </div>
              </div>
            </style.Quantity>

            <style.ItemTd>
            <div>{menu.total}
            </div>
            </style.ItemTd>

            <style.ItemTd>
            <div>x
            </div>
            </style.ItemTd>
          </style.ItemContainer>
        ))}
      </tbody>
    </table>
  );
}
