import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm.js";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

 const [displayCounter, setdisplayCounter] = useState(false);

 const displayHandler = () => {
  setdisplayCounter(true);
  console.log(displayCounter);
 };

 const cancelHandler = () => {
  setdisplayCounter(false);
 };

  if (displayCounter === false) {
    return (
      <div className="new-expense">
        <button onClick={displayHandler}>Add Expense</button>
      </div>
    );
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onAdd={cancelHandler} />
      <button onClick={cancelHandler}>Cancel</button>
    </div>
  );
};

export default NewExpense;
