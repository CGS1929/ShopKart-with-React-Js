import React, { useEffect, useState } from "react";

function CategoriesFilter({ setCategory }) {
  const categories_list = "https://dummyjson.com/products/categories";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(categories_list)
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  });
  return (
    <select
      name=""
      id=""
      className="form-select"
      onChange={(e) => {
        setCategory(e.target.value);
      }}
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat.slug} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}

export default CategoriesFilter;
