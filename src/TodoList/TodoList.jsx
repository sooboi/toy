import React, { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import Todo from "../components/Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((it) => (it.id === updated.id ? updated : it)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((it) => it.id !== deleted.id));
  };

  const handleEdit = (targetId, newText) => {
    setTodos((todos) =>
      todos.map((it) => (it.id === targetId ? { ...it, text: newText } : it))
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((it) => (
          <Todo
            key={it.id}
            todo={it}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
