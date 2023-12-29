import React from 'react'
import { useState } from 'react';
const AddTransection = (props) => {
  const addTransection = props.add
  const[text , setText] = useState("");
  const[amount , setAmount] = useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const transection = {
      text:text,
      amount:+amount,
    };
    addTransection(prev=>[transection,...prev])
    setText("")
    setAmount("")
  }
  return (
    <>
      <div className='transection_container'>
        <h4>Add new transection</h4>
        <form onSubmit={handleSubmit}>
          <div className='form_control'>
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text' />
          </div>
          <div className='form_control'>
            <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount' />
          </div>
            <button type='submit'>Add Transection</button>
        </form>
      </div>
    </>
  )
}

export default AddTransection;
