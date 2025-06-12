# Cambios recientes
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
