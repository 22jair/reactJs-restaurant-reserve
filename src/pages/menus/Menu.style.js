import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
    display:flex;
    background-color: var(--main-white);
    width:100%;
    height: 100%;   
    overflow:hidden;
`;

// LEFT

export const MenuLeft = styled(motion.div)`
    width: 20%;
    max-width: 400px;
    min-width: 300px;
    height: 100%;
    /* position:sticky; 
    background-color:red; */
    /* float:left;
    position:fixed; */
`;


export const MenuSearchContainer = styled(motion.div)`
    height: 15%;
`
export const MenuTipoContainer = styled(motion.div)`
    height: 85%;
    background-color: "red";
    display:grid;
    grid-template-columns: auto auto ;
    padding: 0 20px;
`


// Center
export const MenuCenter = styled(motion.div)`
    width: 80%;
    height: 100%;
    background-color: "yelow";
    overflow-y: scroll;
`;

export const MenuTitleContainer = styled(motion.div)`
    display:flex;
    justify-content: center;
`;

export const MenuTitle = styled(motion.h2)` 
    margin-right: 10px;
`;

export const MenuTitleImg = styled(motion.img)`
width:  30px;
height: 30px;
object-fit: cover;  
`;

export const MenuListContainer = styled(motion.div)`
padding: 50px;
display:flex;
flex-wrap: wrap;
justify-content: center;
`;

export const MenuRight = styled(motion.div)`
    width: 20%;
    height: 100%;
    background-color: "yelow";
    overflow-y: scroll;
`;