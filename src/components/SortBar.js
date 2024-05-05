import React, { useState } from "react";

function SortBar() {
  const [sortBy, setSortBy] = useState("health");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
