import { useExpense } from "../context/ExpenseContext";

function DashboardCards() {
  const { budget, expenses } = useExpense();

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const remaining = budget - totalExpense;

  return (
    <div className="cards">

      <div className="card">
        <h3>Monthly Budget</h3>
        <h2>₹ {budget}</h2>
      </div>

      <div className="card">
        <h3>Total Expense</h3>
        <h2>₹ {totalExpense}</h2>
      </div>

      <div className="card">
        <h3>Remaining Balance</h3>
        <h2
          style={{
            color: remaining >= 0 ? "green" : "red",
          }}
        >
          ₹ {remaining}
        </h2>
      </div>

    </div>
  );
}

export default DashboardCards;