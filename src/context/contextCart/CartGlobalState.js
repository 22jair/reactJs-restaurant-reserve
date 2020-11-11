import React, { createContext, useReducer, useEffect } from "react";
//import AppReducer from "./AppReducer";

import CartReducer from "./CartReducer"

const initialState = {
    menus: [],
    total: 0
}

//create contex
export const CartGlobalContext = createContext(initialState);

//provider
export const CartGlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    useEffect(()=>{
           //console.log("useeffect | CartGlobalState 1")
        if (localStorage.getItem("restaurant__car_context") != null){

            const dataLocalStorage = JSON.parse(localStorage.getItem("restaurant__car_context"));
            dispatch({ type: "ADDLOCALSTORAGE_MENU", payload: dataLocalStorage})   
        }                   
    },[])

    useEffect( ()=> {
        //console.log("useeffect | CartGlobalState 2")
        localStorage.setItem("restaurant__car_context", JSON.stringify(state))
    },[state] )

    //actios
    const addMenu = async (menu) => {
        dispatch({ type: "ADD_MENU", payload: menu})   
    }
    
    const decreaseMenu = (menu) => {
        dispatch({ type: "DESCREASE_MENU", payload: menu})   
    }
        
    const removeMenu = (menu) => {
        dispatch({ type: "REMOVE_MENU", payload: menu });
    };

    const resetMenus = () => {
        dispatch({ type: "RESET_MENUS", payload: [] });
    }

    return(
        <CartGlobalContext.Provider
            value={{
                cart: state,
                addMenu,
                decreaseMenu,
                removeMenu,
                resetMenus
            }}
            >
            {children}
        </CartGlobalContext.Provider>
    )
}

