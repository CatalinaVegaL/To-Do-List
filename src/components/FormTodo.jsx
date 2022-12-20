//Importacion de React y del componente useState que pertenece a React
import React, { useState } from "react";

// Declaración de constante del FormTodo, este recibe como parametros props
const FormTodo = (props) => {
  // Declara constante y se le asigna las props(parametros que se pueden heredar)
  const { handleAddItem } = props; 
  // Constante paramanejar el estado, por defecto inicia vacio
  const [description, setDescription] = useState(""); 
  const handleSubmit = (e) => {
     //Evita que se refresque la pagina, provocando perdida de la informacion
    e.preventDefault();
    handleAddItem({
      // Estado de la tarea, pro defecto no finalizada
      done: false, 
      id: (+new Date()).toString(), 
      description, 
    });
    setDescription(""); // Deja la descripcion vacia nuevamente
  };
  // Se retorna estructura HTML
  return (
    //creamos un form que se ejecuta al dar click
    <form onSubmit={handleSubmit}>
      {/*Crea un div que contiene el input y el boton*/}
      <div className="todo-list">
        <div className="file-input">
          {/*Creacion de input*/}
          <input
            type="text"
            className="text"
            value={description} 
            //Actualiza la información de la descripción cuando el input sea diferente
            onChange={(e) => setDescription(e.target.value)}
          />
          {/*Creacion de boton*/}
          <button
            className="button pink"
            //Condicional que habilita o inhabilita si la descripcion esta vacia
            disabled={description ? "" : "disabled"} 
          >
            {/*Añade los datos del input a Tasklist*/}
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
//Exportación del componente
export default FormTodo;