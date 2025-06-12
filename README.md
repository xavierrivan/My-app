# Lista de Tareas React

Este es un proyecto simple de lista de tareas hecho con React.

## Cambios recientes
- Se añadió la opción de eliminar tareas desde la lista.

### Fragmento de código para eliminar tareas
```jsx
const eliminarTarea = (indexAEliminar) => {
  setTareas(tareas.filter((_, index) => index !== indexAEliminar));
};

<ul>
  {tareas.map((tarea, index) => (
    <li key={index}>
      {tarea}
      <button onClick={() => eliminarTarea(index)} style={{marginLeft: '10px'}}>Eliminar</button>
    </li>
  ))}
</ul>
```

## Scripts disponibles

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación para producción.

## Estructura

- `src/components/TodoList.jsx`: Componente principal de la lista de tareas.
- `src/App.js`: Componente raíz de la aplicación.
- `src/index.js`: Punto de entrada de React.
- `public/index.html`: HTML principal.

---

¡Personaliza este proyecto como desees! 