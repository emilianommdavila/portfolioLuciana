import React, { useState } from 'react';
import Modal from "../components/Modal";
import '../App.css';
import '../styles/proyectos.css';

function ReturnProyectos() {
  const afectarOtraParteDelHTML = () => {
    // Lógica para afectar otra parte del HTML
    // Puedes cambiar el estado, ejecutar una función, etc.
    console.log('Afectar otra parte del HTMLs');
  };
  return (
    <section id="proyectos">
      <div>
        <h2 id='tituloProyectos'>Proyectos</h2>
        <div className='proyectos'>
          {proyecto("Proyecto personal realizado con el software Blender.\n Concepto inspirado en el estilo “Avatar”.\n Realizado a partir de formar primitivas.",
            "https://i.imgur.com/bojn9rK.png",
            "../src/assets/flor2.jpg")}
          {proyecto("Proyecto personal realizado con el software Blender.\n Concepto inspirado en el estilo “Avatar”.\n Realizado a partir de formar primitivas.",
            "../src/assets/nave1.jpg",
            "../src/assets/nave2.jpg")}
          <div className='grillaProyectos' >
            {proyectoSecundario({ imagen: "../src/assets/habitacion1.png", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "../src/assets/mario1.jpg", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "../src/assets/silla1.jpg", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "../src/assets/pelota1.png", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "../src/assets/robot1.jpg", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "../src/assets/habitacionSecundaria1.jpg" , afectarFuncion: afectarOtraParteDelHTML})}
            
          </div>
          <div className='otrasImagenes'>
             <img src="../src/assets/silla1.jpg" alt="" />
          <img src="../src/assets/silla1.jpg" alt="" />
          <img src="../src/assets/silla1.jpg" alt="" />
          <p>hola soy un proyecto</p></div>
        </div>
      </div>
    </section>
  );
}

function proyecto(descripcion: string, direccionImagen1: string, direccionImagen2: string) {
  return (
    <div className='proyectoPrincipal'>
      <div className='proyectoPrincipalPresentacion'>
        <img className='imagenProyectoPrincipal' src={direccionImagen1} alt="" />
      </div>
      <div className='proyectoPrincipalDescripcion'>
        <img className='imagenProyectoSecundaria' src={direccionImagen2} alt="" />
        <div className='descripcionProyecto'>{descripcion}</div>
      </div>
    </div>
  );
}


function proyectoSecundario({ imagen, afectarFuncion }: { imagen: string, afectarFuncion: () => void }) {
  return (
    <>
      <div className='proyectoSecundario'>
        <div className='contenedorImagen'>
          <img
            className='imagenProyectoSecundario'
            src={imagen}
            alt=""
            onClick={afectarFuncion}
          />
          <div className='textoEncima'>Ver más</div>
        </div>
      </div>
    </>
  );
}



export default ReturnProyectos;
