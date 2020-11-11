import React, { useContext } from 'react'
import * as style from './Cart.style'

import ListCart from './../../components/listCart/ListCart'

import { CartGlobalContext } from "./../../context/contextCart/CartGlobalState"

export default function Cart() {

    const { cart, addMenu, decreaseMenu ,removeMenu } = useContext(CartGlobalContext);


    const handleAddToCard = async (plate) => {      
        addMenu(plate);      
    }; 

    const handleDecreaseToCard = async (idPlate) => {              
        decreaseMenu(idPlate);      
      }; 
      
      const handleRemoveToCard = async (idPlate) => {      
        removeMenu(idPlate);      
      }; 

    return (
        <style.CartContainer>
            <style.CartListItemContainer>

                <h2 style={{marginBottom:30}}>Mi Carrito</h2>
                <ListCart menus={cart.menus} add={handleAddToCard} decrease={handleDecreaseToCard} remove={handleRemoveToCard} />                
            </style.CartListItemContainer>

            <style.CartSummaryContainer>

                <style.CartTotal>{ cart.total }</style.CartTotal>
                <style.CartLink to="/reserve/create"> Reaizar Reserva </style.CartLink>
            </style.CartSummaryContainer>
        </style.CartContainer>
    )
}

