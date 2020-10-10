import React from 'react'
import '../styles/product.css'
import Buy from './buy'
const Product = ({ prod, clear}) => {

    return(
        <div className = 'product'>
            <button onClick = {clear}>Back</button>
            <h1>{prod.name}</h1>
            <div className = "zdjecie"></div>
            <Buy  prod = {prod} clear = {clear}/>
        </div>
    )
}
export default Product