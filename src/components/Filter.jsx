import "../styles/Search.css";

function Filter({ category, setCategory }) {
  return (
    <div className="filter-container">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Medical">Medical</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
}

export default Filter;