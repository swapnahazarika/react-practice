import React, { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import Card from "../UI/Card"

//Passing data via Props--------------------------------------------------------------
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title)
  // const clickHandler = () => {
  //   setTitle("updated!!!!!!!")
  // }
  //-----------Splitting Components into Multiple component(Here we just taking date as a new component)----------
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2> {props.title} </h2>
        <div className='expense-item__price'> Rs. {props.amount} </div>
      </div>
      <button>Change Title</button>
    </Card>
  )
}
export default ExpenseItem
