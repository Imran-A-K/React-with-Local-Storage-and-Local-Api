import React, { useEffect, useState } from 'react'
import { getTotal } from '../utilities/fakedb';
import Cosmetic from './Cosmetics_Component/Cosmetic'

const Cosmetics = () => {
    const [cosmetics,setCosmetics] = useState([])
    useEffect( () =>{
        fetch('database.json')
        .then( response => response.json())
        .then(apiData => setCosmetics(apiData))

    }, []);

    const total = getTotal(cosmetics);
  return (
    <div>
        <h1>welcome to my fashion store</h1>
        <p>Money needed : {total}</p>
        {
            cosmetics.map(cosmetic => <Cosmetic 
            key={cosmetic.id}
                cosmetic={cosmetic}
            />
            )
        }
    </div>
  )
}

export default Cosmetics