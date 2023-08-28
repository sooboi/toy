import React, { useState } from "react";

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
  return (
    <section>
      <ul>
        {todos.map((it) => (
          <li key={it.id}>{it.text}</li>
        ))}
      </ul>
    </section>
  );
}
