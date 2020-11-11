import styled from "styled-components";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

export const CardContainer = styled(motion.div)`
  width: 210px;
  height: 230px;
  border-radius: 15px;
  position: relative;
  margin: 40px;
`;

export const CardBackgroundContainer = styled(motion.div)`
 width: 100%;
  height: 100%;
  position: relative;
  overflow:hidden;
  border-radius: 15px;
`


export const CardBackground = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;  
  top: 0;
  left: 0;
  border-radius: 15px;
  background-image: url(${props => props.img});  
  background-color: rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size:cover;
  filter: blur(10px) grayscale(70%);    
  z-index: 1;
`;
export const CardBackgroundTop = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;  
  top: 0;
  left: 0;
  border-radius: 15px;  
  background-color: var(--main-gray);
  opacity:0.5;    
  z-index: 2;
`;



export const CardImg = styled(motion.img)`
  position: absolute;
  width: 150px;  
  height: 150px;
  object-fit: cover;
  top: -35px;
  left: 30px;
  z-index: 3;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  //border-radius:50%;
  border-radius:15px 8px 50px 10px;

`;

export const CardInfo = styled(motion.div)`
  /* background-color: rgba(0,0,0,.7); */
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  padding: 20px;
  color: var(--main-dark);
  text-align: left;
  z-index: 4;
`;

export const CardTitle = styled(motion.h3)`
  font-size: 15px;
`;
export const CardDesc = styled(motion.div)``;
export const CardPrice = styled(motion.div)``;
export const CardCategory = styled(motion.div)``;

export const CardButton = styled(motion.div)`
  position: absolute;
  bottom: -20px;
  right: 20px;
  width: 45px;
  height: 55px;
  background-color: var(--main-dark);
  display:flex;
  align-items:center;
  justify-content: center;
  color: var(--main-white);
  border-radius: 15px 8px 30px 10px;
  font-size:20px;
  z-index: 5;
  cursor: pointer;
`;
