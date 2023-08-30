import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((it, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === it && styles.selected
              } `}
              onClick={() => onFilterChange(it)}
            >
              {it}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
