import React, { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import EditTodo from "../EditTodo/EditTodo";

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
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <RiDeleteBack2Fill />
      </button>
      <button onClick={handleToggle}>
        <FaEdit />
      </button>
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
