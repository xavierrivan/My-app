import React, { useState } from "react";

export function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const agregarTarea = () => {
    if (tarea.trim() === "") return; // Evita agregar tareas vacías
    setTareas([...tareas, tarea]);
    setTarea(""); // Limpia el campo de entrada
  };

  const eliminarTarea = (indexAEliminar) => {
    setTareas(tareas.filter((_, index) => index !== indexAEliminar));
  };

  console.log("tarea:", tarea);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button onClick={() => agregarTarea()}>
        Agregar Tarea
      </button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)} style={{marginLeft: '10px'}}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
} 
