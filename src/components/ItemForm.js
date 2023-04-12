import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit }) {

  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: '',
    category: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit(newItem)
  }

  function handleChange(e) {
    setNewItem({...newItem, 
      [e.target.name] : e.target.value})
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        onChange={handleChange}
        type="text" name="name" />
      </label>

      <label>
        Category:
        <select
        onChange={handleChange} 
        name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
