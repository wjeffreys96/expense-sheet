import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [dateChanged, setDate] = useState("2021");

  const dateChangedHandler = (enteredDate) => {
    setDate(enteredDate);
  };

  const newDisplayedExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dateChanged;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={dateChanged}
          onDateChange={dateChangedHandler}
        />
        <ExpensesList items={newDisplayedExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
