import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export const CartContainer = styled(motion.div)`
    display:flex;
    background-color: var(--main-white);
    width:100%;
    height: 100%;
    padding:70px;    
`;

export const CartListItemContainer = styled(motion.div)`  
    width:70%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    /* background:#ccc; */

`;

export const CartSummaryContainer = styled(motion.div)`   
    width:30%;
    height: 100%;
    background-color: var(--main-dark);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CartTotal = styled(motion.div)`
    width: 50px;
    height: 50px;
    background-color: yellow;
`  

export const CartLink = styled(Link)`
    display: block;
    width: 100%;
    background-color: var(--main-white);
    color: var(--main-dark);
    text-align: center;
    padding: 20px;
    border: 1px solid var(--main-dark);    
`