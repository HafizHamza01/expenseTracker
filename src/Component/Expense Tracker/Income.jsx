import React from 'react'

const Income = (props) => {
  const transection = props.expense;
  const amount = transection.map((transection) => transection.amount)
  const income = amount.filter((item) => item > 0).reduce((amount, state) => state += amount, 0).toFixed(2);
  const expense = amount.filter((item) => item < 0).reduce((amount, state) => state += amount, 0).toFixed(2);
  return (
    <div className='income_container'>
      <div className='income'>
        <h5>Income</h5>
        <h4><span>{income}</span></h4>
      </div>
      <div className='expense'>
        <h5>Expense</h5>
        <h4><span>{expense}</span></h4>
      </div>
    </div>
  )
}

export default Income;
