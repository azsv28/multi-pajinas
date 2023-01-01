import React from 'react'
import Biografia from "./biografia/Biografia.js";
function Inicio() {
    return (
        <div className='container'>
            <h1 className='p'>Bienvenidos</h1>
            <p className='p'>Esta aplicasion esta echa por:</p>
            <Biografia 
        nombre='Alejandro Zuriel Solis Verduzco'
        pais='México'
        cargo='estudiante de programador'
        empresa='fulval'
        biografia='En esta pajina encontrareas un alendario, unas caculadora, un notde notas y una lista de tareas para que pongas,
        Esperamos que sea de tu  agrado y que la puedas usar bien'
        imagen="azs"
        />
        </div>
    )
}

export default Inicio;