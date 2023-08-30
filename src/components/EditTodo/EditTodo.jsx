import React, { useState } from "react";

export default function EditTodo({ text, handleToggle, onEdit, id }) {
  const [editText, setEditText] = useState(text);

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEdit = () => {
    onEdit(id, editText);
    handleToggle();
  };

  return (
    <div>
      <input type="text" name="text" value={editText} onChange={handleChange} />
      <button onClick={handleEdit}>수정</button>
    </div>
  );
}
