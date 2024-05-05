import React, { useState } from "react";

function Filter({ onFilter }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
    onFilter(selectedFilters);
  };

  return (
    <div>
      <label>
        <input type="checkbox" value="Support" onChange={handleFilterChange} />
        Support
      </label>
      <label>
        <input type="checkbox" value="Medic" onChange={handleFilterChange} />
        Medic
      </label>
      {/* Add more checkboxes for other bot classes */}
    </div>
  );
}

export default Filter;
