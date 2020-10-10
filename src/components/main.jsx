import React, {useState} from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
 import '../styles/main.css'
import Product from './product'
export const products = [
    {id: 1, name: "Drukarka", cena: 89.99, ile: 8},
    {id: 2, name: "Monitor", cena: 159.99, ile: 8},
    {id: 3, name: "Klawiatur", cena: 99.99, ile: 8},
    {id: 4, name: "Mysz", cena: 69.99, ile: 8},
    {id: 5, name: "Głośnik", cena: 49.99, ile: 8},
    {id: 6, name: "Zszywacz", cena: 9.99, ile: 8},
    {id: 7, name: "Długopis", cena: 5.99, ile: 8},
    {id: 8, name: "PC", cena: 419.99, ile: 8},
    {id: 9, name: "Laptop", cena: 289.99, ile: 8},
    {id: 10, name: "Telefon", cena: 199.99, ile: 8},
    {id: 11, name: "Słuchawki", cena:39.99, ile: 8},
    {id: 12, name: "Taśma", cena: 19.99}
]
const Main = () => {


    const [product, setProduct] = useState('')
 
    const pick = (e) => {
        const id = products.findIndex(item => item.id === Number(e.target.id) )
        setProduct(products[id])
     
    }
    const clear = () => {
        setProduct('')
    }

   const list =  products.map ( item => 
    
        <div onClick = {pick} className = 'produts' id = {item.id}>
            <div onClick = {pick} id = {item.id} className = 'zdj'>zdjęcie</div>
            <h1 id = {item.id} onClick = {pick}>{item.name}  <span>{item.cena}</span></h1>
            

        </div>
        
        )
    return (
        <>
        <div className = 'wrapper'>
        {list} 
        </div>
        {product ? <Product  prod = {product} clear = {clear}/> : null }
    
        </>
    )
}

    export default Main