import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((it, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(it)}>{it}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
