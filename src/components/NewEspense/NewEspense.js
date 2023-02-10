import React, {useState} from "react";
import './NewEspense.css'
import ExpenseForm from "./ExpenseForm";
const NewEspense = (props) => {

   const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

const startEditingHandler = () => {
    setIsEditing(true)
}

const stopEditingHandler = () => {
    setIsEditing(false)
}

    return (
    <div className="new-expense">
    { !isEditing  &&  <button onClick={startEditingHandler}>Add New Expense</button>}
     { isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCansel={stopEditingHandler}/>}
    </div>)
};


export default NewEspense