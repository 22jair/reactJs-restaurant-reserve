import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export const CardBorder = styled(motion.div)`
    /* padding:5px; */
    height:25%;
`

export const CardContent = styled(motion.div)`
    width: 100%;
    height:100%;
    background-color: var(--main-dark);
    overflow:hidden;
    position:relative;
    display:flex;
    /* border-radius: 20px; */
    /* display:flex; */
    /* padding: 5px; */
`
export const CardImg = styled(motion.img)`
    width: 65%;
    height:100%;
    object-fit: cover;    
`

export const CardInfo = styled(motion.div)`
   /* background-color: rgba(0,0,0,.7); */
   /* position:absolute;
   bottom:0;
   left: 0;
   width: 100%; */
   /* height:100%; */
   width:35%;
   padding:15px 5px;
   color:#FFF;
   text-align:center;
`


export const CardTitle = styled(motion.div)`
   
`
export const CardDesc = styled(motion.div)`
   
`
export const CardPrice = styled(motion.div)`
   
`
export const CardCategory = styled(motion.div)`
   
`
export const CardButton = styled(motion.div)`
   
`

 