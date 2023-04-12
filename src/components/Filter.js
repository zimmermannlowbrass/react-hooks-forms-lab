import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {


  function handleChangeInSearchText(e) {
    // setSearchTerm(e.target.value)
    const searchTerm = e.target.value
    onSearchChange(searchTerm.toLowerCase())
  }

  return (
    <div className="Filter">
      <input
      onChange={handleChangeInSearchText}
      value={search}
      type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
