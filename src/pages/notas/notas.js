import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineClose } from "react-icons/ai";
import "./notas.css";

/* Tarea Formulario */
function TareaFormulario(props) {
 const [input, setInput] = useState("");

 const manejarCambio = (e) => {
  setInput(e.target.value);
 };
  const manejarEnvio = (e) => {
  e.preventDefault();

  const tareaNueva = {
   id: uuidv4(),
   texto: input,
   completada: false,
  };
  props.onSubmit(tareaNueva);
 };
 return (
  <form className="tarea-formulario" onSubmit={manejarEnvio}>
  <input
   className="tarea-input"
   type="text"
   placeholder="Escribe una Nota"
   name="texto"
   onChange={manejarCambio}
  />

  <button className="tarea-boton">Agregar</button>
  </form>
 );
}
/* Cuadros de cada tarea */
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
 return (
  <div
  className={
   completada ? "tarea-contenedor completada" : "tarea-contenedor"
  }>
  <div className="tarea-texto" onClick={() => completarTarea(id)}>
   {texto}
  </div>
  <div className="tarea-contenedor-icnos" onClick={() => eliminarTarea(id)}>
   <AiOutlineClose className="tarea-icono" />
  </div>
  </div>
 );}
/* lista de tareas*/
function ListaDeTareas() {
 const [tareas, setTareas] = useState([]);
 const agregarTarea = (tarea) => {
  if (tarea.texto.trim()) {
   const tareasActualizadas = [tarea, ...tareas];
   setTareas(tareasActualizadas);
  }
 };
 const eliminarTarea = (id) => {
  const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
  setTareas(tareasActualizadas);
 };

 const completarTarea = (id) => {
  const tareasActualizadas = tareas.map((tarea) => {
  if (tarea.id === id) {
   tarea.completada = !tarea.completada;
  }
  return tarea;
 });
 setTareas(tareasActualizadas);
 };
 return (
  <>
  <TareaFormulario onSubmit={agregarTarea} />
  <div className="tarea-lista-contenedor d-flex gap-4 flex-wrap my-4">
   {tareas.map((tarea) => (
   <Tarea
    key={tarea.id}
    id={tarea.id}
    texto={tarea.texto}
    completada={tarea.completada}
    completarTarea={completarTarea}
    eliminarTarea={eliminarTarea}
   />
   ))}
  </div>
  </>
 );
}

/* Aplicacion Final de Tarea     */
export default function TareaApp() {
 return (
  <div className="aplicacion-tareas">
   <div className="tarea-lista-principal">
    <h1>Notas y Recordatorios</h1>
    <ListaDeTareas />
   </div>
  </div>
 );
}
