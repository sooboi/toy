import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuid(), text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button>Add</button>
    </form>
  );
}
