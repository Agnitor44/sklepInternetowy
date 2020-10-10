import React, {useState} from 'react'
import '../styles/buy.css'
import products from './main'
import {useBuy, useProduts} from '../App'

const Buy = ({ prod, clear}) => {
    const insert = useBuy()
    const method = useProduts()
    const [many, setMany] = useState(0)
    const [order, setOrder] = useState([])
    const stock = () => {
      const czyJest = method.findIndex(item => item.id === prod.id) 
      
    if(czyJest>-1) {
        
        const obj =  {
            id: prod.id,
            name: prod.name,
            cena: prod.cena +  method[czyJest].cena,
            ile: many + method[czyJest].ile
        }
        
        
        insert(method.splice(czyJest, 1))
        insert([...method, obj])
        clear()
    }

      else{
      const obj =  {
            id: prod.id,
            name: prod.name,
            cena: prod.cena,
            ile: many
        }
        
        insert([...method, obj])
        clear()
    }
    }
    const dodaj = () => {
        setMany(many + 1)
       
    }
    const odejmij = () => {
        setMany(many - 1)
        
    }
    return (
        <div className = "buy">
        <h1 className ='buyh'>{prod.cena}</h1>
        <button onClick = {stock}> Dodaj do koszyka </button>
        <div className = 'licznik'>
        <div onClick = {odejmij}className = 'min'><h1>-</h1></div>
    <span>{many}</span>
        <div onClick = {dodaj} className = 'plu'><h1>+</h1></div>
        </div>
        </div>
    )
}
export default Buy
