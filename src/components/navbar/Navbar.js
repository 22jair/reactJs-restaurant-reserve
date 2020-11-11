import React, { useContext } from "react";
import * as style from "./Navbar.style";
import { Flex } from './../../layout/Flex'
//import { StyledLink } from './../../layout/Typography'

import { CartGlobalContext } from './../../context/contextCart/CartGlobalState'

export default function Navbar() {

  const { cart } = useContext(CartGlobalContext)

  return (
    <style.Navbar>
      <Flex>
          <style.NavbarHeader>LA CHACRA</style.NavbarHeader>         
      </Flex>
      <Flex>
        
        <style.NavbarLink to="/menus">Menus</style.NavbarLink>
        <style.NavbarLink to="/">Reservas</style.NavbarLink>
        <style.NavbarLink to="/">Estadisticas</style.NavbarLink>
        <style.NavbarLink to="/">Contacto</style.NavbarLink>
        <style.NavbarLink to="/cart">Carrito { cart.menus.length } </style.NavbarLink>
        <style.NavbarLink to="/">Inciar Seción</style.NavbarLink>

      </Flex>
    </style.Navbar>
  );
}
