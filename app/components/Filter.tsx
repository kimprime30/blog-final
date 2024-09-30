"use client";
import { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState("recent");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    // Lógica de filtragem aqui
    console.log(`Filtrando por: ${filter}`);
  };

  return (
    <div className="filter">
      <label htmlFor="filter">Filtrar por:</label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="recent">Mais recentes</option>
        <option value="most-viewed">Mais vistos</option>
        <option value="most-liked">Mais curtidos</option>
      </select>
    </div>
  );
};

export default Filter;
