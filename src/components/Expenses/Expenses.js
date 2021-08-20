import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("Select Year")
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  //let { items = [] } = props
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}></ExpenseItem>
        ))}
      </Card>
    </div>
  )
}
export default Expenses
