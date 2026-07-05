import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";
import "../styles/ExpenseForm.css";

function ExpenseForm() {
  const { addExpense } = useExpense();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    });

    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Medical Emergency</option>
          <option>Entertainment</option>
          <option>House Rent</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;