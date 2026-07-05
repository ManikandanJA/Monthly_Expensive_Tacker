import { useExpense } from "../context/ExpenseContext";
import ExpenseCard from "./ExpenseCard";

import "../styles/Expense.css";

function ExpenseList({ search, category }) {

  const { expenses } = useExpense();

  const filteredExpenses = expenses.filter((expense) => {

    const matchSearch = expense.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      expense.category === category;

    return matchSearch && matchCategory;

  });

  return (

    <div className="expense-list">

      <h2>Expense History</h2>

      {filteredExpenses.length === 0 ? (

        <p className="empty">
          No Expenses Found
        </p>

      ) : (

        filteredExpenses.map((expense) => (

          <ExpenseCard
            key={expense.id}
            expense={expense}
          />

        ))

      )}

    </div>

  );

}

export default ExpenseList;