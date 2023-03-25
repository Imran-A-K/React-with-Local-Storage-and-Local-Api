import React from 'react'
import { addToDb } from '../../utilities/fakedb'
import "./Cosmetic.css"

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic
    const addToCart = (id) =>{
    addToDb(id)
    }
    const addToCartWithParameter =() => addToCart(id)
  return (
    <div className='product'>
        <h2>Buy this: {name} </h2>
        <p>Only for: ${price}</p>
        <p><small>it has id: {id}</small></p>
        {/* <button onClick={addToCartWithParameter}>Add to cart</button> */}
{/* or */}
        <button onClick={() =>addToCart(id)}>Add to cart</button>
    </div>
  )
}

export default Cosmetic