import styled from "styled-components";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

export const HomeContainer = styled(motion.div)`
    display:flex;
    background-color: var(--main-white);
    width:100%;
    height: 100%;
`;

// IMG LIST
export const HomeList = styled(motion.div)`
  width: 18%;
  height: 100%;
  /* background-color:red; */
`;

// MAIN IMG
export const HomeImgContainer = styled(motion.div)`
  width: 52%;
  height: 100%;  
  position: relative;
  /* padding:5px; */  
`;

export const HomeImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 20px; */
`;

// Info

export const HomeInfo = styled(motion.div)`
  width: 30%;
  height: 100%;

  /* background-color:yellow; */
`;
