import React, { createContext, useReducer, useEffect } from "react";
//import AppReducer from "./AppReducer";

import CartReducer from "./UserReducer"

const initialState = {
    user: { id: 1 }
}

//create contex
export const UserGlobalContext = createContext(initialState);

//provider
export const UserGlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    useEffect(()=>{
        //console.log("useeffect | UserGlobalState 1")
        if (localStorage.getItem("restaurant__user_context") != null){
            const dataLocalStorage = JSON.parse(localStorage.getItem("restaurant__user_context"));
            dispatch({ type: "ADDLOCALSTORAGE_USER", payload: dataLocalStorage})   
        }                   
    },[])

    useEffect( ()=> {
        //console.log("useeffect | UserGlobalState 2")
        localStorage.setItem("restaurant__user_context", JSON.stringify(state))
    },[state] )

    //actios
    const userLogin = async (data) => {
        dispatch({ type: "LOGIN", payload: data})   
    }    

    return(
        <UserGlobalContext.Provider
            value={{
                user: state.user,
                userLogin
            }}
            >
            {children}
        </UserGlobalContext.Provider>
    )
}

