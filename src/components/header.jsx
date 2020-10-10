import { BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';
import {useMoney} from '../App'
import React, {useState} from 'react'
import '../styles/header.css'
import Cart from './cart';

const list = [
    {name: 'Start', path: '/', exact: true, className: 'active'},
    {name: 'Twoje konto', path: '/account', className: 'active'},
    
   
  ]

const Header = () => {
    const hajs = useMoney()
    const hajsFixed = hajs.toFixed(2)
    const [cart, setCart] = useState(false)
    const clicker = () => {
        setCart(prev => !prev)
    }
    const menu = list.map(item =>  (<li className = 'nawigacja'>
        <NavLink to = {item.path} exact ={item.exact} activeClassName = {item.className} >{item.name}</NavLink>
        </li>))

    return (
        <div>
        <nav className ='main'>
        <ul>
        {menu}
        <h1 className = 'hajsy'>{`${hajsFixed}zł`}</h1>
        <button onClick = {clicker}>{cart ? "Powrót" : "Koszyk"}</button>
        </ul>
        
        </nav>

        {cart ? <Cart/>: null}
        </div>
        
    )
}
export default Header