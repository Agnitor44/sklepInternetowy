import React, {useState}  from 'react'
import {useProduts, useMoneyFunction, useMoney, useBuy, useHistory, useHistoryFunction} from '../App'
import '../styles/cart.css'

const Cart = () => {
    
    const history = useHistory()
    const setHistory = useHistoryFunction()
    const setMoney = useMoneyFunction()
    const portfel = useMoney()
    const setProduct = useBuy()
    const koszyk = useProduts()

    const delet = (e) => {
        
       const id = koszyk.findIndex(item => item.id === Number(e.target.id))
       const ll = koszyk.splice(id, 1)
       setProduct([...koszyk])
        console.log(koszyk)
      
      
       
    
    }

    const lista = koszyk.map(item => 
        <section className = 'list'>
            <h2>{item.name}</h2>
            <h3>{item.cena}</h3>
            <h4>{`${item.ile} sztuki`}</h4>
            <div className = 'obrazek'></div>
            <h1 className ='all'>{`${(item.ile * item.cena).toFixed(2)}zł`}</h1>
            <button id = {item.id} onClick = {delet} className = 'delet'><h3>X</h3></button>
        </section>
        )
        const money = koszyk.map(item => item.ile * item.cena)
        let all = 0
        for(let i = 0; i < money.length; i++){
            all += money[i]
        }
        let moneyFix = all.toFixed(2)
        const kupuje = () => {
            
          if(portfel > moneyFix) {
            setMoney(Number(portfel - moneyFix))
            
            
           setHistory([...history, koszyk])
           setProduct([])
          }
          else alert('za mało pieniędzy')
        }
      
    return (
        <div className = 'cart'>
            <h1 className = 'tyt'>Koszyk</h1>

            {lista }
            <div className = 'end'></div>
            <span className = "allall">{`${moneyFix}zł`}</span>
            <button onClick = {kupuje}>Kup</button>
        </div>
    )
}

    export default Cart   