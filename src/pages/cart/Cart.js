import React, { useContext } from 'react'
import * as style from './Cart.style'

import ListCart from './../../components/listCart/ListCart'

import { CarGlobalContext } from "./../../context/contextCar/CarGlobalState"

export default function Cart() {

    const { menus, addMenu, decreaseMenu ,removeMenu } = useContext(CarGlobalContext);

    return (
        <style.CartContainer>
            <style.CartListItemContainer>
                <h2 style={{marginBottom:30}}>Carrito de Compras</h2>
                <ListCart menus={menus} />

            </style.CartListItemContainer>
            <style.CartSummaryContainer>

            </style.CartSummaryContainer>
        </style.CartContainer>
    )
}
