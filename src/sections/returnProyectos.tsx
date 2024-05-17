import  { useState } from 'react';
import '../App.css';
import '../styles/proyectos.css';
// import React from 'react';
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
        <h1 id=''>Motion Graphics</h1>
        <div className='proyectos'>
          {/* {proyecto('Proyecto desarrollado en Blender e inspirado en el universo de "Avatar", \nse construyó a partir de formas primitivas y curvas. Se destaca por una animación sutil\n diseñada para resaltar tanto el proyecto en sí como el juego de luces.\nEn relación con la iluminación, se seleccionaron colores acordes a la estética elegida, mientras que las hojas \ncuentan con una iluminación propia gracias al "nodo emission". Además, se incorporaron luces de tipo "point" y "area"\n estratégicamente para resaltar áreas específicas del proyecto.',
            "https://i.imgur.com/bojn9rK.png",
            "https://i.imgur.com/yccjkTX.jpg",{
              imagen: "https://i.imgur.com/EdwvFad.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/bojn9rK.png", {
                titulo: "Flor estilo 'Avatar'",
                contenido: 'Proyecto desarrollado en Blender e inspirado en el universo de "Avatar", \nse construyó a partir de formas primitivas y curvas. Se destaca por una animación sutil\n diseñada para resaltar tanto el proyecto en sí como el juego de luces.\nEn relación con la iluminación, se seleccionaron colores acordes a la estética elegida, mientras que las hojas \ncuentan con una iluminación propia gracias al "nodo emission". Además, se incorporaron luces de tipo "point" y "area"\n estratégicamente para resaltar áreas específicas del proyecto.',
                url:"https://www.youtube.com/embed/bjPxftzzLZU?autoplay=1&mute=1",
                heigth:"480",
                width:"1343",
                hidden: "block"
              })
            })} */}
          {/* {proyecto("Este proyecto, elaborado con Autodesk Maya como parte de la materia de Modelado 3D,\n toma inspiración de la icónica nave USS Enterprise de la serie Star Trek. \nSe utilizaron planos detallados como referencia visual para guiar el proceso de creación. \nLa metodología se centró en el uso de formas primitivas con el objetivo de lograr un modelado Low Poly, \nbuscando así un enfoque más simplificado y estilizado.",
            "https://i.imgur.com/gi38vKT.jpg",
            "https://i.imgur.com/ZG5kELo.jpg",{
              imagen: "https://i.imgur.com/gi38vKT.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/gi38vKT.jpg", {
                titulo: "Modelado USS Enterprise ",
                contenido: 'Este proyecto, elaborado con Autodesk Maya como parte de la materia de Modelado 3D,\n toma inspiración de la icónica nave USS Enterprise de la serie Star Trek. \nSe utilizaron planos detallados como referencia visual para guiar el proceso de creación. \nLa metodología se centró en el uso de formas primitivas con el objetivo de lograr un modelado Low Poly, \nbuscando así un enfoque más simplificado y estilizado.',
                url:"ds",
                heigth:"",
                width:"",
                hidden: "none"
              })
            })} */}
            
            
          <div className='grillaProyectos' >
          {proyectoSecundario({
              imagen: "https://i.imgur.com/yb1d93d.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/yb1d93d.png", {
                titulo: "Video Intitucional Hospital",
                contenido: "Proyecto  Hospital Regional Río Cuarto. Proyecto realizado para la materia 'Seminario de prácticas profesionales', elaborado con el software Adobe After Effects. Su propósito es ser un video institucional que presenta las principales áreas, actividades y servicios de Salud Mental que ofrece el Hospital Regional Río Cuarto. Se buscó que la información fuera amena y que tanto los colores, los íconos como la música complementaran el trabajo.",
                url:"https://www.youtube.com/embed/cVqiDJ2YCMY?autoplay=1&mute=1",
                heigth:"480",
                width:"640",
                hidden: "block"
              })
            })}
             {proyectoSecundario({
              imagen: "https://i.imgur.com/Bjz1QCH.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/Bjz1QCH.png", {
                titulo: "Ciclo de Caminata",
                contenido: "Este proyecto se realizó con el software After Effects como parte de una práctica personal, con el objetivo de aplicar la teoría para crear un ciclo de caminata. Se comenzó animando desde lo general hasta lo particular para lograr un buen acabado. Se emplearon expresiones como 'loopIn' y 'loopOut' para crear bucles, además de duplicar la composición para animar el parpadeo de los ojos en una de ellas y luego intercalar con la primera composición. Se buscó principalmente que la caminata tuviera aplicación de teoría, agregando realismo y personalidad al personaje, especialmente mediante el overlapping.",
                url:"https://www.youtube.com/embed/h1sNKVckjGE?autoplay=1&mute=1",
                heigth:"",
                width:"",
                hidden: "block"
              })
            })} 
            {proyectoSecundario({
              imagen: "https://i.imgur.com/ZZOdp4P.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/ZZOdp4P.png", {
                titulo: "Demo herramientas After Effects",
                contenido:"'Proyecto realizado como parte de la materia 'Seminario de prácticas profesionales', elaborado con el software After Effects. Tiene el propósito de demostrar de forma concisa algunas de las técnicas y herramientas que manejo en Adobe After Effects. Las técnicas demostradas son las siguientes: Capas 3D, Luces virtuales, Animación de cámaras, Animación de texto que siga una forma libre, Animación de texto tipo escritura a mano.'",
                url:"https://www.youtube.com/embed/haWSmT4dnOQ?autoplay=1&mute=1",
                heigth:"480",
                width:"640",
                hidden: "block"
              })
            })}
            {proyectoSecundario({
              imagen: "https://i.imgur.com/qWCYJpR.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/qWCYJpR.png", {
                titulo: "Pelota AE.",
                contenido: "Este proyecto en 2D, desarrollado con el software After Effects, se enfocó en la manipulación del gráfico de curvas para lograr una animación fluida y realista. Se agregó personalidad a la pelota mediante expresiones faciales que evolucionan a lo largo de la animación, enfatizando el carácter de la misma. Además, se aplicó el principio de exageración para otorgarle una estética caricaturesca, asegurando un impacto visual distintivo.",
                url:"https://www.youtube.com/embed/LQTOETGxUAM?autoplay=1&mute=1",
                heigth:"",
                width:"",
                hidden: "block"
              })
            })}           
      
          </div>
          </div>
          <h1 id=''>Mi arte en 3D</h1>
        <div className='proyectos'>
          {/* {proyecto('Proyecto desarrollado en Blender e inspirado en el universo de "Avatar", \nse construyó a partir de formas primitivas y curvas. Se destaca por una animación sutil\n diseñada para resaltar tanto el proyecto en sí como el juego de luces.\nEn relación con la iluminación, se seleccionaron colores acordes a la estética elegida, mientras que las hojas \ncuentan con una iluminación propia gracias al "nodo emission". Además, se incorporaron luces de tipo "point" y "area"\n estratégicamente para resaltar áreas específicas del proyecto.',
            "https://i.imgur.com/bojn9rK.png",
            "https://i.imgur.com/yccjkTX.jpg",{
              imagen: "https://i.imgur.com/EdwvFad.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/bojn9rK.png", {
                titulo: "Flor estilo 'Avatar'",
                contenido: 'Proyecto desarrollado en Blender e inspirado en el universo de "Avatar", \nse construyó a partir de formas primitivas y curvas. Se destaca por una animación sutil\n diseñada para resaltar tanto el proyecto en sí como el juego de luces.\nEn relación con la iluminación, se seleccionaron colores acordes a la estética elegida, mientras que las hojas \ncuentan con una iluminación propia gracias al "nodo emission". Además, se incorporaron luces de tipo "point" y "area"\n estratégicamente para resaltar áreas específicas del proyecto.',
                url:"https://www.youtube.com/embed/bjPxftzzLZU?autoplay=1&mute=1",
                heigth:"480",
                width:"1343",
                hidden: "block"
              })
            })} */}
          {/* {proyecto("Este proyecto, elaborado con Autodesk Maya como parte de la materia de Modelado 3D,\n toma inspiración de la icónica nave USS Enterprise de la serie Star Trek. \nSe utilizaron planos detallados como referencia visual para guiar el proceso de creación. \nLa metodología se centró en el uso de formas primitivas con el objetivo de lograr un modelado Low Poly, \nbuscando así un enfoque más simplificado y estilizado.",
            "https://i.imgur.com/gi38vKT.jpg",
            "https://i.imgur.com/ZG5kELo.jpg",{
              imagen: "https://i.imgur.com/gi38vKT.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/gi38vKT.jpg", {
                titulo: "Modelado USS Enterprise ",
                contenido: 'Este proyecto, elaborado con Autodesk Maya como parte de la materia de Modelado 3D,\n toma inspiración de la icónica nave USS Enterprise de la serie Star Trek. \nSe utilizaron planos detallados como referencia visual para guiar el proceso de creación. \nLa metodología se centró en el uso de formas primitivas con el objetivo de lograr un modelado Low Poly, \nbuscando así un enfoque más simplificado y estilizado.',
                url:"ds",
                heigth:"",
                width:"",
                hidden: "none"
              })
            })} */}
            
            
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
            })}   {proyectoSecundario({
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
            {proyectoSecundario({
              imagen: "https://i.imgur.com/D18qLWM.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/D18qLWM.png", {
                titulo: "Proyecto Composición Living",
                contenido: 'Proyecto creado con el software  Blender con el propósito de explorar y perfeccionar la simulación de ropa y colisiones para futuras implementaciones. Se hizo hincapié en la creación de sombras y contrastes mediante la ubicación de luces desde diversos ángulos. Además, se probaron diferentes  texturas para resaltar y distinguir  la mesa y el piso de la escena.  ',
                url:"",
                heigth:"480",
                width:"640",
                hidden: "none"
              })
            })}
            {proyectoSecundario({
              imagen: "https://i.imgur.com/CXgIVvk.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/kEPRY2c.png", {
                titulo: "Proyecto Personaje Zorro",
                contenido: 'Proyecto de diseño de personaje realizado con el software blender 3D. Se buscó un acabado cartoon  con un fondo neutro para que realizara el personaje. En la creación del mismo se mezclaron tanto figuras geométricas básicas como curvas, por ejemplo en la boca, para que dichos rasgos fueran más fáciles de ejecutar. ',
                url:"",
                heigth:"480",
                width:"640",
                hidden: "none"
              })
            })}
             {proyectoSecundario({
              imagen: "https://i.imgur.com/5xN5I0X.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/f6m0IjP.jpg", {
                titulo: "Proyecto Osito",
                contenido: 'Proyecto de diseño de personaje realizado con el software Blender. Se utilizó Particle system con una textura como base para la creación del pasto, también se realizaron combinaciones de nodos para lograr un buen acabado en las nubes del proyecto. Respecto a la iluminación se busco algo natural utilizando como base con una imagen HDRi y luego se utilizaron area lights para enfatizar rasgos del personaje. Para el fondo  empezó con una curva para hacer el tronco de los árboles y para las copas de los mismo cubo con pocas subdivisiones, se buscaba lograr un contraste entre el acabado más suavizado del personaje y un modelado más low poly con los árboles del fondo.',
                url:"",
                heigth:"480",
                width:"640",
                hidden: "none"
              })
            })}
             {proyectoSecundario({
              imagen: "https://i.imgur.com/xBRI3Ox.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/wYAtNFF.jpg", {
                titulo: "Proyecto Patito",
                contenido: 'Proyecto de diseño de personaje realizado con el software Blender. Se utilizó Particle system para la creación del pasto usando una textura como base. Para la iluminación se utilizaron area lights y una imagen HDRi buscando dar naturalidad a la escena, también se realizó una serie de combinaciones de nodos para crear el efecto de nubes de tormenta. Respecto al personaje se buscó que tuviera características cartoon y un acabado muy suavizado. ',
                url:"",
                heigth:"480",
                width:"640",
                hidden: "none"
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
interface ProyectoSecundarioProps {
  imagen: string;
  afectarFuncion: () => void;
}
// function proyecto(descripcion: string, direccionImagen1: string, direccionImagen2: string, {  afectarFuncion }: ProyectoSecundarioProps) {
//   const lineasDescripcion = descripcion.split('\n');

//   return (
//     <div className='proyectoPrincipal'>
//       <div className='proyectoPrincipalPresentacion'>
//       <a href="#especificacionProyecto"  onClick={afectarFuncion}>
//         <a href="#especificacionProyecto" className='textoEncima1' onClick={afectarFuncion}>
//           Ver más</a>
//         <img className='imagenProyectoPrincipal' src={direccionImagen1} alt="" />
//       </a>        
//       </div>
//       <div className='proyectoPrincipalDescripcion'>
//         <img className='imagenProyectoSecundaria' src={direccionImagen2} alt="" />
//         <div className='descripcionProyecto'>
//           {lineasDescripcion.map((linea, index) => (
//             <React.Fragment key={index}>
//               {linea}
//               <br />
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



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
