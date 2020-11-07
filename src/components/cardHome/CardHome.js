import React from "react";
import * as style from "./CardHome.style";

export default function CardHome({ img, title, desc, price, category, to }) {
  return (
    <style.CardBorder>
    <style.CardContent>
      <style.CardImg src={img} />
      <style.CardInfo>
        <style.CardTitle>{title}</style.CardTitle>
        {/* <style.CardDesc>{desc}</style.CardDesc> */}
        <style.CardPrice>s/. {price}</style.CardPrice>
        <style.CardCategory>{category}</style.CardCategory>
        {/* <style.CardButton>Info</style.CardButton>           */}
      </style.CardInfo>
    </style.CardContent>
    </style.CardBorder>
  );
}
