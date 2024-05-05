import React, { useState } from "react";

function SortBar({ onSort }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSort(selectedValue);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSortChange}>
        <option value="">Sort by...</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
