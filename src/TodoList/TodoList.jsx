import React, { useState } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import Todo from "../components/Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "공부하기",
      status: "active",
    },
    {
      id: "2",
      text: "예비군 훈련",
      status: "active",
    },
  ]);

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

  const filtered = getFilteredItems(todos, filter);

  return (
    <section>
      <ul>
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
