import  { useState } from 'react';
import '../App.css';
import '../styles/proyectos.css';

interface DescripcionDetallada {
  titulo: string;
  contenido: string;
}

function ReturnProyectos() {
  const [imagenDetallada, setImagenDetallada] = useState<string>("https://i.imgur.com/xyrrwZi.jpg");
  const [descripcionDetallada, setDescripcionDetallada] = useState<DescripcionDetallada>({
    titulo: "Robot Re-Copado",
    contenido: "Robot hecho por Lulu recontra re copado",
  });

  const afectarOtraParteDelHTML = (nuevaImagen: string, nuevaDescripcion: DescripcionDetallada) => {
    setImagenDetallada(nuevaImagen);
    setDescripcionDetallada({
      titulo: nuevaDescripcion.titulo,
      contenido: nuevaDescripcion.contenido,
    });
  };

  return (
    <section id="proyectos">
      <div>
        <h2 id='tituloProyectos'>Proyectos</h2>
        <div className='proyectos'>
          {proyecto("Proyecto personal realizado con el software Blender.\n Concepto inspirado en el estilo “Avatar”.\n Realizado a partir de formar primitivas.",
            "https://i.imgur.com/bojn9rK.png",
            "https://i.imgur.com/yccjkTX.jpg")}
          {proyecto("Proyecto personal realizado con el software Blender.\n Concepto inspirado en el estilo “Avatar”.\n Realizado a partir de formar primitivas.",
            "https://i.imgur.com/gi38vKT.jpg",
            "https://i.imgur.com/ZG5kELo.jpg")}
          <div className='grillaProyectos' >
            {proyectoSecundario({
              imagen: "https://i.imgur.com/EdwvFad.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/EdwvFad.png", {
                titulo: "Proyecto 1",
                contenido: "Descripción del Proyecto 1",
              })
            })}
             {proyectoSecundario({
              imagen: "https://i.imgur.com/J27vwrJ.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/J27vwrJ.jpg", {
                titulo: "Proyecto 1",
                contenido: "Descripción del Proyecto 1",
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/fh4XvDM.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/fh4XvDM.jpg", {
                titulo: "Proyecto 1",
                contenido: "Descripción del Proyecto 1",
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/qWCYJpR.png",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/qWCYJpR.png", {
                titulo: "Proyecto 1",
                contenido: "Descripción del Proyecto 1",
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/xyrrwZi.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/xyrrwZi.jpg", {
                titulo: "Proyecto 1",
                contenido: "Descripción del Proyecto 1",
              })
            })} {proyectoSecundario({
              imagen: "https://i.imgur.com/ahXjldG.jpg",
              afectarFuncion: () => afectarOtraParteDelHTML("https://i.imgur.com/ahXjldG.jpg", {
                titulo: "Proyecto 1",
                contenido: "Descripción del Proyecto 1",
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
          
          <a href="#especificacionProyecto" className='textoEncima'>Ver más</a>
        </div>
      </div>
    </>
  );
}

export default ReturnProyectos;
