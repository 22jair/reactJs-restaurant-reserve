import React, { createContext, useReducer } from "react";
//import AppReducer from "./AppReducer";

import CarReducer from "./CarReducer"

const initialState = {
    menus: []
}

//create contex
export const CarGlobalContext = createContext(initialState);

//provider
export const CarGlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(CarReducer, initialState);

    //actios
    const addMenu = async (plate) => {
        dispatch({ type: "ADD_MENU", payload: plate})   
    }
    
    const decreaseMenu = (plate) => {
        dispatch({ type: "DESCREASE_MENU", payload: plate})   
    }
        
    const removeMenu = (id) => {
        dispatch({ type: "REMOVE_MENU", payload: id });
    };

    return(
        <CarGlobalContext.Provider
            value={{
                menus: state.menus,
                addMenu,
                decreaseMenu,
                removeMenu
            }}
            >
            {children}
        </CarGlobalContext.Provider>
    )
}

