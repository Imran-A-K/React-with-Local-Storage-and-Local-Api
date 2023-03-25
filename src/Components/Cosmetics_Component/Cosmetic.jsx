import React from 'react'
import "./Cosmetic.css"

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic
    const addToCart = () =>{
        
    }
  return (
    <div className='product'>
        <h2>Buy this: {name} </h2>
        <p>Only for: ${price}</p>
        <p><small>it has id: {id}</small></p>
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Cosmetic