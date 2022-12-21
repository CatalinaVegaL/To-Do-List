//Importacion de React y del componente Fragment que pertenece a React
import React, { Fragment } from "react";

// Declaración de constante del checkbox, este recibe como parametros props
const Checkbox = (props) => {
  //Recibe la propiedad data y el evento onChange
  const {
    onChange,
    data: { id, description, done }, // aqui verifico las propiedades que necesito traerme como el id, la descripcion y si esta hecho o no la tarea
  } = props;
  // Retorna una estructura HTML
  return (
    <Fragment>
      <svg
        viewBox="0 0 0 0"
        // Estilos
        style={{ position: "absolute", zIndex: -1, opacity: 0 }}
      >
        <defs>
          //Creacion de etiqueta path, permite dibujar cualquier tipo de linea o
          curva
          <path id="todo__line" d="M21 12.3h168v0.1z" />
          <path
            id="todo__box"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          />
          <path id="todo__check" d="M10 13l2 2 5-5" />
          <circle id="todo__circle" cx="13.5" cy="12.5" r="10" />
        </defs>
      </svg>
      {/*etiqueta Label que contendra un input permite agregar nuevas tareas, ver si la tarea esta terminada y la descripcion del archivo*/}
      <label className="todo new-item">
        {/*Imput del la tarea*/}
        <input
          className="todo__state"
          name={id}
          type="Checkbox"
          defaultChecked={done}
          // Evento que define las acciones a ejecutar cuando el evento ocurra
          onChange={onChange}
        />
        {/*Movimiento de tarea completada*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 200 25"
          className="todo__icon"
        >
          <use xlinkHref="#todo__line" className="todo__line" />
          <use xlinkHref="#todo__box" className="todo__box" />
          <use xlinkHref="#todo__check" className="todo__check" />
          <use xlinkHref="#todo__circle" className="todo__circle" />
        </svg>
        {/*Descripción de la tarea*/}
        <div className="todo__text">{description}</div>
      </label>
    </Fragment>
  );
};
//Exportación del componente
export default Checkbox;
