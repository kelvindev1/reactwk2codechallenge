import React from "react";

function SortBar({ handleSort }) {
  return (
    <div>
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" onChange={(e) => handleSort(e.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
