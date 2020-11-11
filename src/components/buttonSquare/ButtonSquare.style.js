import styled from 'styled-components'
import {motion} from 'framer-motion'
// import {Link} from 'react-router-dom'

export const ButtonSquareContainer =  styled(motion.div)`
    width: 110px;
    height: 90px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--main-dark);
    border-radius: 5px;    
    justify-self: center;
    cursor: pointer;
`

export const ButtonSquareImg = styled(motion.img)`
width:  30px;
height: 30px;
object-fit: cover;    
`

export const ButtonSquareName  = styled(motion.p)`
    text-align: center;
`