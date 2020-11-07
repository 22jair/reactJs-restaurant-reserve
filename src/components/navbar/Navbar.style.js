import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export const Navbar = styled(motion.nav)`
    display:flex;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--main-white);    
    height: var(--H-Main-Navbar);
    position: sticky;
    top:0;
    z-index: 100;
`

export const NavbarHeader = styled(motion.h1)``

export const NavbarLink = styled(Link)`
    margin-left: 20px;
    color: var(--main-dark);
`