import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
    const [value,setValue]=useState(1)
    const numOfCakes=useSelector((state)=>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of cakes-{numOfCakes}</h2>
        <label htmlFor="">Enter Restock Quantity</label>
        <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} /> <br /><br />
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>dispatch(restocked(value))}>Restock Cake</button>
    </div>
  )
}
