import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const { user } = useAuth();

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (!user) return;

    const savedBudget =
      JSON.parse(localStorage.getItem(`budget_${user}`)) || 0;

    const savedExpenses =
      JSON.parse(localStorage.getItem(`expenses_${user}`)) || [];

    setBudget(savedBudget);
    setExpenses(savedExpenses);
  }, [user]);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem(
      `budget_${user}`,
      JSON.stringify(budget)
    );

    localStorage.setItem(
      `expenses_${user}`,
      JSON.stringify(expenses)
    );
  }, [budget, expenses, user]);

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function deleteExpense(id) {
    setExpenses((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function updateExpense(updatedExpense) {
  setExpenses((prev) =>
    prev.map((expense) =>
      expense.id === updatedExpense.id
        ? updatedExpense
        : expense
    )
  );
}
  return (
    <ExpenseContext.Provider
    value={{
  budget,
  setBudget,
  expenses,
  addExpense,
  deleteExpense,
  updateExpense,
}}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpense = () =>
  useContext(ExpenseContext);