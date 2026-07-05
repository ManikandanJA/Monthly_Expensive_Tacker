import { useState } from "react";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import Budget from "../components/Budget";
import ExpenseForm from "../components/ExpenseForm";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import ExpenseList from "../components/ExpenseList";

import MonthlyChart from "../components/MonthlyChart";
import "../styles/Dashboard.css";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="main-layout">
        <div className="left-panel">
          <Budget />
          <ExpenseForm />
        </div>

        <div className="right-panel">
          <DashboardCards />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <Filter
            category={category}
            setCategory={setCategory}
          />

          <ExpenseList
  search={search}
  category={category}
/>

<MonthlyChart />


        </div>
      </div>
    </div>
  );
}

export default Dashboard;