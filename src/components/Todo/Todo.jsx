import React, { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import EditTodo from "../EditTodo/EditTodo";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete, onEdit }) {
  const { text, status } = todo;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor="checkbox">
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <RiDeleteBack2Fill />
        </button>
      </span>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleToggle}>
          <FaEdit />
        </button>
      </span>
      {toggle && (
        <EditTodo
          text={text}
          handleToggle={handleToggle}
          onEdit={onEdit}
          id={todo.id}
        />
      )}
    </li>
  );
}
