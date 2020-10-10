import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom';
import Cart from './cart'
import Main from './main'
import Account from './account'
const Page = () => {
   

    return (
        <Switch>
        <Route path = "/" exact component = {Main}></Route>
        <Route path = "/account" component = {Account}></Route>
     
        </Switch>


    )
}
export default Page