//Importacion de React
import React from "react";
//Importacion del componente CheckBox
import Checkbox from "./CheckBox"; 

// Declaración de constante del FormTodo, este recibe como parametros props
const TaskList = (props) => {
  const { list, setList } = props; 

  // Através del comando event.target, podemos tener acceso a toda la API del elemento HTML. Así, podemos acceder a todos los atributos del elemento input
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    /* Creacion de la funcion que permite recorrer el array */
    const updateList = list.map((item) => ({
      ...item,
      //Actualiza el valor del checkbox
      done: item.id === name ? checked : item.done,
    }));
    //Retorna la lista actualizada
    setList(updateList);
  };

  //Funcion que permite eliminar las tareas realizadas
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };
  //Funcion que recorre la lista de tareas
  const chk = list.map((item) => (
    //Añade un ckeckbox para cada item de la lista 
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  // Se retorna estructura HTML
  return (
    <div className="todo-list">
      {/*Si el array está vacía muestra el mensaje No Task, de lo contrario muestra la lista*/}
      {list.length ? chk : "No tasks"}
      {/*Muestra el boton si el array contiene algo, de lo contrario, no*/}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete All Done
          </button>
        </p>
      ) : null}
    </div>
  );
};
//Exportación del componente
export default TaskList; 