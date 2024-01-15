import  { useState } from 'react';
import '../App.css';
import '../styles/proyectos.css';
import React from 'react';
import Iframe from './iframe';


interface DescripcionDetallada {
  titulo: string;
  contenido: string;
  url: string;
  width: string;
  heigth: string;
  hidden: string
}

function ReturnProyectos() {
  const [imagenDetallada, setImagenDetallada] = useState<string>("https://i.imgur.com/lpF488b.png");
  const [descripcionDetallada, setDescripcionDetallada] = useState<DescripcionDetallada>({
    titulo: "Presione en cualquier proyecto para abrir la descripción",
    contenido: "",
    url:"https://www.youtube.com/embed/fCcRNUlE7ek?autoplay=1&mute=1",
    width:"853",
    heigth:"480",
    hidden: "none"
  });

  const afectarOtraParteDelHTML = (nuevaImagen: string, nuevaDescripcion: DescripcionDetallada) => {
    setImagenDetallada(nuevaImagen);
    console.log("hola")
    setDescripcionDetallada({
      titulo: nuevaDescripcion.titulo,
      contenido: nuevaDescripcion.contenido,
      url: nuevaDescripcion.url,
      heigth: nuevaDescripcion.url,
      width: nuevaDescripcion.url,
      hidden: nuevaDescripcion.hidden
      
    });
  };

  return (
    <section id="proyectos">
      <div>
        <h2 id='tituloProyectos'>Proyectos</h2>
        <div className='proyectos'>
          {proyecto('Proyecto desarrollado en Blender e inspirado en el universo de "Avatar", \nse construyó a partir de formas primitivas y curvas. Se destaca por una animación sutil\n diseñada para resaltar tanto el proyecto en sí como el juego de luces.\nEn relación con la iluminación, se seleccionaron colores acordes a la estética elegida, mientras que las hojas \ncuentan con una iluminación propia gracias al "nodo emission". Además, se incorporaron luces de tipo "point" y "area"\n estratégicamente para resaltar áreas específicas del proyecto.',
            "https://i.imgur.com/bojn9rK.png",
            "https://i.imgur.com/yccjkTX.jpg")}
          {proyecto("Este proyecto, elaborado con Autodesk Maya como parte de la materia de Modelado 3D,\n toma inspiración de la icónica nave USS Enterprise de la serie Star Trek. \nSe utilizaron planos detallados como referencia visual para guiar el proceso de creación. \nLa metodología se centró en el uso de formas primitivas con el objetivo de lograr un modelado Low Poly, \nbuscando así un enfoque más simplificado y estilizado.",
            "https://i.imgur.com/gi38vKT.jpg",
            "https://i.imgur.com/ZG5kELo.jpg")}
          <div className='grillaProyectos' >
            {proyectoSecundario({
              imagen: "https://i.imgur.com/EdwvFad.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/EdwvFad.png", {
                titulo: "Habitacion isométrica BLENDER",
                contenido: 'Este proyecto, desarrollado en Blender, se ha creado a partir de formas primitivas, destacándose especialmente en la ventana donde se ha implementado un "nodo emission" para simular la luz solar. La intención fue transmitir calidez al proyecto, especialmente a través de la iluminación de la ventana. Para lograr este efecto, se han incorporado tres luces "área" fuera del modelo, estratégicamente posicionadas para enfatizar los colores y realzar la atmósfera cálida que se buscaba transmitir.',
                url:"ds",
                heigth:"",
                width:"",
                hidden: "none"
              })
            })}
             {proyectoSecundario({
              imagen: "https://i.imgur.com/J27vwrJ.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/J27vwrJ.jpg", {
                titulo: "Composición Mario",
                contenido: 'Composición elaborada con Blender e inspirada en el juego "Mario", se construyó utilizando formas primitivas. El enfoque principal del proyecto fue practicar el sistema de partículas, aprovechando su funcionalidad en la creación del pasto en la composición. Además, se incorporó un efecto de desenfoque en los personajes posteriores para resaltar la presencia del protagonista principal, situado al frente de la escena.',
                url:"s",
                heigth:"",
                width:"",
                hidden: "none"
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/fh4XvDM.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/fh4XvDM.jpg", {
                titulo: "Silla Maya",
                contenido: "Proyecto personal ejecutado en Autodesk Maya y construido a partir de formas primitivas, tuvo como objetivo la creación de un objeto simple y cotidiano para optimizar el tiempo de elaboración. Se exploraron elementos visuales mediante el juego de sombras y el color de fondo para lograr un efecto de contraste que realzara la presentación del objeto en cuestión.",
                url:"",
                heigth:"",
                width:"",
                hidden: "none"
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/qWCYJpR.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/qWCYJpR.png", {
                titulo: "Pelota AE.",
                contenido: "Este proyecto en 2D, desarrollado con el software After Effects, se enfocó en la manipulación del gráfico de curvas para lograr una animación fluida y realista. Se agregó personalidad a la pelota mediante expresiones faciales que evolucionan a lo largo de la animación, enfatizando el carácter de la misma. Además, se aplicó el principio de exageración para otorgarle una estética caricaturesca, asegurando un impacto visual distintivo.",
                url:"https://www.youtube.com/embed/LQTOETGxUAM?autoplay=1&mute=1",
                heigth:"",
                width:"",
                hidden: "block"
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/xyrrwZi.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/xyrrwZi.jpg", {
                titulo: "Robot",
                contenido: "Proyecto desarrollado en Autodesk Maya como parte de la materia de Modelado 3D, se basó en el uso de blueprints como guía. Construido a partir de formas primitivas y prestando especial atención a los detalles, el objetivo principal fue lograr un modelado low poly.",
                url:"",
                heigth:"",
                width:"",
                hidden: "none"
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/ahXjldG.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/ahXjldG.jpg", {
                titulo: "Habitación isométrica Maya",
                contenido: 'Proyecto elaborado con Autodesk Maya y construido a partir de formas primitivas, se centra en el perfeccionamiento de detalles para lograr una composición realista y completa. Se dedicó especial atención a la ventana y la iluminación, buscando crear una sutil sombra sobre la alfombra. Además, se incorporó una "área light" en la pantalla de la computadora para simular su encendido y generar una ilusión de luz propia.',
                url:"",
                heigth:"",
                width:"",
                hidden: "none"
              })
            })}
            {proyectoSecundario({
              imagen: "https://i.imgur.com/QY6SvUa.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/QY6SvUa.png", {
                titulo: "Proyecto tostadora animada",
                contenido: 'Proyecto desarrollado con el software Blender, inspirado en el estilo cartoon y enfocado en trabajar la anticipación del objeto antes de saltar. Se jugó con las luces para darle profundidad y destacar las partes metálicas.                ',
                url:"https://www.youtube.com/embed/FLYYWTpkDH4?autoplay=1&mute=1",
                heigth:"480",
                width:"640",
                hidden: "block"
              })
            })}
          </div>
          <div className='especificacionProyecto' id='especificacionProyecto'>
            <div className='descripcionDetallada'>
              <div className='imagenDetallada'>
                <img id='imgaenDetalladaFuente' src={imagenDetallada} alt="" />
              </div>
              <div className='descripcionEscrita'>
                <h3>{descripcionDetallada.titulo}</h3>
                <p>{descripcionDetallada.contenido}</p>
              </div>
            </div>
          </div>
          <div style={{ display: descripcionDetallada.hidden }}>
            <h2>Animación</h2>
            <Iframe src={descripcionDetallada.url} title="VideoDemo" width={853} height={480} loop={true}/>
          </div>
          

          </div>
      </div>
      <script src="https://www.youtube.com/iframe_api"></script>
    </section>
    
  );
}

function proyecto(descripcion: string, direccionImagen1: string, direccionImagen2: string) {
  const lineasDescripcion = descripcion.split('\n');

  return (
    <div className='proyectoPrincipal'>
      <div className='proyectoPrincipalPresentacion'>
        <img className='imagenProyectoPrincipal' src={direccionImagen1} alt="" />
      </div>
      <div className='proyectoPrincipalDescripcion'>
        <img className='imagenProyectoSecundaria' src={direccionImagen2} alt="" />
        <div className='descripcionProyecto'>
          {lineasDescripcion.map((linea, index) => (
            <React.Fragment key={index}>
              {linea}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProyectoSecundarioProps {
  imagen: string;
  afectarFuncion: () => void;
}

function proyectoSecundario({ imagen, afectarFuncion }: ProyectoSecundarioProps) {
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
          
        <a href="#especificacionProyecto" className='textoEncima' onClick={afectarFuncion}>
          Ver más</a>
        </div>
      </div>
    </>
  );
}

export default ReturnProyectos;
