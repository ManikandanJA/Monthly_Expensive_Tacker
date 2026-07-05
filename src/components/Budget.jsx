import { useExpense } from "../context/ExpenseContext";
import "../styles/Budget.css";

function Budget() {
  const { budget, setBudget } = useExpense();

  return (
    <div className="budget-container">
      <h2>Monthly Budget</h2>

      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        placeholder="Enter Budget"
      />
    </div>
  );
}

export default Budget;