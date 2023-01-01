import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import { NavLink } from 'react-router-dom';

import './heder.css';


function Header() {

 return (

 <nav className="navbar navbar-expand-lg navbar-light bg-light">

 <div class="container-fluid">

 <NavLink className="navbar-brand" to="/">

 <svg xmlns="http://www.w3.org/2000/svg" color='red' width="30" height="30" fill="currentColor" class="bi bi-amd" viewBox="0 0 16 16">

 <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>

 </svg> HOlA</NavLink>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

  <span className="navbar-toggler-icon"></span>

  </button>

 <div className="collapse navbar-collapse" id="navbarNav">

 <ul className="navbar-nav">

  <li className="nav-item">

  <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink >

  </li>

  <li class="nav-item">

  <NavLink className="nav-link" to="/Calculadora">Calculadora</NavLink >

  </li>

  <li class="nav-item">
   <NavLink className="nav-link" to="/notas">Notas</NavLink >
  </li>

  <li class="nav-item">
   <NavLink className="nav-link" to="/calendario">calendario</NavLink >
  </li>

  <li class="nav-item">
   <NavLink className="nav-link" to="/TareaT">Tarea</NavLink >
  </li>

 </ul>

 </div>

 </div>

</nav>

)

}



export default Header;