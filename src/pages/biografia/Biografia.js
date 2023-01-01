import React from "react";
import "./Biografia.css";

function Biografia (props) {
 return (
  <div className="comtenedor-biografia">
   <img className="imagen-biografia" src={require(`../imagenes/ds-${props.imagen}.jpg`)}/>
   <div className="contenedor-biografia">
    <p className="nombre-biografia">
     <strong>{props.nombre}</strong> en {props.pais}
    </p>
    <p className="cargo-biografia">
     {props.cargo} en <strong>{props.empresa}</strong>
    </p>
    <p className="text-biografia">{props.biografia}</p>
   </div>
  </div>
 );
}
export default Biografia;