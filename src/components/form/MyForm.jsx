import React, { useState } from "react";

function MyForm() {
  const [category, setCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInput(e) {
    setCategory(e.target.value.toUpperCase().replaceAll(" ", "-"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="category"
        value={category}
        onInput={handleInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
