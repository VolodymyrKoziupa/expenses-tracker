
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterChange={filterHandler} />
      <ExpensesChart expenses={filterExpenses}/>
      <ExpensesList items={filterExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
