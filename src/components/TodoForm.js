import React, { useState } from "react";

function TodoForm(props) {
  // Création de l'entrée avec useState
  const [input, setInput] = useState("");

  // Entrer le titre de la todo
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Ne pas rafraîchir la page en validant l'input
  // Relier la fonction avec le "onSubmit" sur la balise <form>
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      // Générer un id a chaque input validé
      id: Math.floor(Math.random() * 5000),
      // Titre de la todo égale à l'input entrée
      text: input
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Ajouter une tâche"
        value={input}
        name="todo"
        onChange={handleChange}
      ></input>
      <button className="add-todo-btn">Ajouter</button>
    </form>
  );
}

export default TodoForm;
