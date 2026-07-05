import { useExpense } from "../context/ExpenseContext";
import "../styles/BudgetProgress.css";

// function BudgetProgress() {
//   const { budget, expenses } = useExpense();

//   const totalExpense = expenses.reduce(
//     (sum, item) => sum + Number(item.amount),
//     0
//   );

//   const percentage =
//     budget > 0
//       ? Math.min((totalExpense / budget) * 100, 100)
//       : 0;

//   const remaining = budget - totalExpense;

//   return (
//     <div className="progress-card">

//       <h2>Budget Progress</h2>

//       <div className="progress-bar">

//         <div
//           className="progress-fill"
//           style={{
//             width: `${percentage}%`,
//             background:
//               percentage >= 90
//                 ? "#ef4444"
//                 : percentage >= 70
//                 ? "#f59e0b"
//                 : "#22c55e",
//           }}
//         ></div>

//       </div>

//       <h3>{percentage.toFixed(0)}% Used</h3>

//       <div className="progress-info">

//         <p>
//           💸 Spent :
//           <span> ₹{totalExpense}</span>
//         </p>

//         <p>
//           💰 Remaining :
//           <span> ₹{remaining}</span>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default BudgetProgress;
function BudgetProgress() {
  return (
    <div
      style={{
        background: "red",
        color: "white",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      Budget Progress Working
    </div>
  );
}

export default BudgetProgress;