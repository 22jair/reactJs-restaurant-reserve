import React from "react";
import * as style from "./CardMenu.style";
import { FiShoppingCart } from "react-icons/fi";

export default function CardMenu({ img, title, desc, price, category, to, handleClick }) {
  return (
    <style.CardContainer>
      <style.CardBackgroundContainer>
        <style.CardBackground img={img} />
        <style.CardBackgroundTop />
      </style.CardBackgroundContainer>
      
      <style.CardImg src={img} />

      <style.CardInfo>
        <style.CardTitle>{title}</style.CardTitle>
        {/* <style.CardDesc>{desc}</style.CardDesc> */}
        <style.CardPrice>s/. {price}</style.CardPrice>
        <style.CardCategory>{category}</style.CardCategory>
      </style.CardInfo>
      <style.CardButton onClick={() => handleClick()}>
        <FiShoppingCart />
      </style.CardButton>
    </style.CardContainer>
  );
}
