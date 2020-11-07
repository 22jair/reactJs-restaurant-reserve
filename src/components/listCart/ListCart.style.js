import styled from "styled-components";
import { motion } from "framer-motion";

const widtCell = "14%";

export const ItemTd = styled(motion.td)` 
   & > div {
    display: flex;
   align-items: center;
   justify-content: center; 
   }
`;

export const ItemContainer = styled(motion.tr)`
  width: 100%;
`;

export const ProductContainer = styled(motion.td)`
  width: 100%;  
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Image = styled(motion.img)`
  width: 50%;  
  max-width: 150px;
  height: 100%;
  object-fit: cover;
`;
export const InfoContainer = styled(motion.div)`
  margin-left: 15px;
`;
export const Title = styled(motion.h4)``;
export const Description = styled(motion.p)``;

export const Price = styled(ItemTd)``;
export const Quantity = styled(ItemTd)`
    
`;
export const Total = styled(ItemTd)``;
export const Actions = styled(ItemTd)``;
