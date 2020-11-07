import styled from "styled-components";
import { motion } from "framer-motion";


export const MenuSearchContent = styled(motion.div)`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MenuSearchInput = styled(motion.input)`
    border: none;
    border-bottom: 1px solid var(--main-dark);
    outline: none;
`
export const MenuSearchIcon = styled( motion.div)`
    margin-left: 5px;
    cursor:pointer;
`
