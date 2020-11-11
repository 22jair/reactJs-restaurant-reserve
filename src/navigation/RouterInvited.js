import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../pages/home/Home'
import Menus from '../pages/menus/Menus'
import Cart from '../pages/cart/Cart'
import ReserveCreate from '../pages/reserve/create'
export default function RouterInvited() {
    return (       
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/menus" component={Menus}/>
                <Route path="/cart" component={Cart}/>                
                
                <Route path="/reserve/create" component={ReserveCreate}/>
            </Switch>
    )
}
