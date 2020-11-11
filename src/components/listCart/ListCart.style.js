import styled from "styled-components";
import { motion } from "framer-motion";


export const ItemContainer = styled(motion.tr)`
  width: 100%;
  
`;

export const ItemTd = styled(motion.td)` 
    margin-top: 20px;
   & > div {
    display: flex;
   align-items: center;
   justify-content: center;
   }
`;

export const ProductoInfoContainer = styled(motion.div)`
  width: 100%;  
  display: flex;
  padding: 20px;
`;

export const Image = styled(motion.img)`
  width: 40%;    
  height: 100px;
  object-fit: cover;
  background-color:red;
`;

export const InfoContainer = styled(motion.div)`
  width: 60%;  
  padding-left: 15px;
`;

export const IconContainer = styled(motion.div)`
  margin: 0 15px;
  cursor: pointer;
`

