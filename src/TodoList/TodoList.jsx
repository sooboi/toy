import React, { useState } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import Todo from "../components/Todo/Todo";

export default function TodoList() {
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

  return (
    <section>
      <ul>
        {todos.map((it) => (
          <Todo
            key={it.id}
            todo={it}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
