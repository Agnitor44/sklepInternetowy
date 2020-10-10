import React from 'react'
import {useHistory, useMoney} from '../App'
import { useEffect } from 'react'
import '../styles/account.css'
const Account = () => {


    const pieniondz = useMoney()
    const zakupy = useHistory()
    const hajsFix = pieniondz.toFixed(2)
    const lista = zakupy.map(item => item.map( item =>
        <div className = 'kupiony'>
            <h1>{item.name}</h1>
            <h4>{`${item.ile} sztuk`}</h4>
            <h2>{`${(item.cena * item.ile).toFixed(2)} zł`}</h2>

        </div>

    ))
  
    
    
 
   
    return (
        <div className = 'profileAll'>
        <div className = 'profile'>
        <div className ='avatar'>avatar</div>
        <h1>Name</h1>
        <h3>{`${hajsFix}zł`}</h3>
        </div>
            {lista}

        </div>
    )
}

    export default Account 