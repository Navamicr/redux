import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const [value,setValue]=useState(1)
    const numOfIcecream=useSelector((state)=>state.icecream.numOfIcecream)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of icecream-{numOfIcecream}</h2>
        <label htmlFor="">Enter Restock Quantity</label>
        <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} /> <br /><br />
        <button onClick={()=>dispatch(ordered())}>Order Icecream</button>
        <button onClick={()=>dispatch(restocked(value))}>Restock Icecream</button>
    </div>
  )
}
