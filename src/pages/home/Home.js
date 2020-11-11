import React from "react";
// import { Flex } from "./../../layout/Flex";
import * as style from "./Home.style";

import CardHome from "./../../components/cardHome/CardHome";
import HomeLocalData from "../../localData/HomeLocalData";

export default function Home() {
  console.log(HomeLocalData);
  return (
    <style.HomeContainer>
      <style.HomeInfo>
        <div>a</div>
      </style.HomeInfo>

      <style.HomeImgContainer>
        <style.HomeImg src="/img/img6.jpg" />
      </style.HomeImgContainer>

      <style.HomeList>
        {HomeLocalData.map((item, index) => (
          <CardHome
            key={item.id}
            title={item.title}
            img={item.img}
            desc={item.desc}
            price={item.price}
            category={item.category}
          />
        ))}
      </style.HomeList>
    </style.HomeContainer>
  );
}
