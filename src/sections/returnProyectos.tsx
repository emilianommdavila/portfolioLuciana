
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
            "https://i.imgur.com/yccjkTX.jpg")}
          {proyecto("Proyecto personal realizado con el software Blender.\n Concepto inspirado en el estilo “Avatar”.\n Realizado a partir de formar primitivas.",
            "https://i.imgur.com/gi38vKT.jpg",
            "https://i.imgur.com/ZG5kELo.jpg")}
          <div className='grillaProyectos' >
            {proyectoSecundario({ imagen: "https://i.imgur.com/EdwvFad.png", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "https://i.imgur.com/J27vwrJ.jpg", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "https://i.imgur.com/fh4XvDM.jpg", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "https://i.imgur.com/qWCYJpR.png", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "https://i.imgur.com/xyrrwZi.jpg", afectarFuncion: afectarOtraParteDelHTML })}
            {proyectoSecundario({ imagen: "https://i.imgur.com/ahXjldG.jpg" , afectarFuncion: afectarOtraParteDelHTML})}
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
