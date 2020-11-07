import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export const CartContainer = styled(motion.div)`
    display:flex;
    background-color: var(--main-white);
    width:100%;
    height: 100%;
    padding:30px;
`;

export const CartListItemContainer = styled(motion.div)`  
    width:70%;
    height: 100%;
    /* background:#ccc; */

`;

export const CartSummaryContainer = styled(motion.div)`   
    width:30%;
    height: 100%;
    background-color: var(--main-dark);
`;