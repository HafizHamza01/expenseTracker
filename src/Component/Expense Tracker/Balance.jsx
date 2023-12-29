import React from 'react'

const Balance = (props) => {
  const transection = props.totalAmount;
  const amount = transection.map((transection)=>transection.amount);
  const total = amount.reduce((amount , state)=>state+=amount , 0).toFixed(2)
  return (
    <div className='balance_container'>
      <h5>YOUR BALANCE</h5>
      <h4>{total}</h4>
    </div>
  )
}

export default Balance;
