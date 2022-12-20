//Importacion de React y del componente useState que pertenece a React
import React, { useState } from "react"; // Se importa el hook useState de control estados de react
// Importación de componentes
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

//Creacion de funcion
const Container = (_) => {
  //Uso del hook useState para dar un estado inicial
  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    //Añade tarea al array
    setList([...list, addItem]);
  };
  // Se retorna estructura HTML
  return (
    <div>
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />{" "}
    </div>
  );
};

export default Container;
