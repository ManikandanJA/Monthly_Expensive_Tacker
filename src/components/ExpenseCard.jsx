import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

function ExpenseCard({ expense }) {
  const { deleteExpense, updateExpense } = useExpense();

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);

  const saveExpense = () => {
    updateExpense({
      ...expense,
      title,
      amount: Number(amount),
    });

    setEditing(false);
  };
    const icons = {
    Food: "🍔",
    Transport: "🚗",
    Shopping: "🛍️",
    Bills: "💡",
    Medical: "🏥",
    Entertainment: "🎬",
  };

  return (
    <div className="expense-card">
      {editing ? (
        <>
          <div className="edit-form">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className="save-btn"
              onClick={saveExpense}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="expense-left">

            <div className="expense-icon">
          {icons[expense.category] || "💰"}
        </div>

            <div className="expense-details">
              <h3>{expense.title}</h3>

              <p>{expense.category}</p>

              <span>{expense.date}</span>
            </div>

          </div>

          <div className="expense-right">

            <h2>₹ {expense.amount}</h2>

            <div className="btn-group">

              <button
                className="edit-btn"
                onClick={() => setEditing(true)}
              >
                ✏️
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteExpense(expense.id)}
              >
                🗑️
              </button>

            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default ExpenseCard;