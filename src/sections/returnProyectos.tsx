import '../App.css';
import '../styles/proyectos.css'



function ReturnProyectos() {
  return (
    <div>
        <h2>Proyectos</h2>
        <div className='proyectos'> 
          {proyecto("Proyecto personal realizado con el software Blender.\n Concepto inspirado en el estilo “Avatar”.\n Realizado a partir de formar primitivas.",
          "../src/assets/flor1.png",
          "../src/assets/flor2.jpg")}
              {proyecto("Proyecto personal realizado con el software Blender.\n Concepto inspirado en el estilo “Avatar”.\n Realizado a partir de formar primitivas.",
          "../src/assets/nave1.jpg",
          "../src/assets/nave2.jpg")}
          <div className='grillaProyectos'>
            {proyectoSecundario("../src/assets/habitacion1.png")}
            {proyectoSecundario("../src/assets/mario1.jpg")}
            {proyectoSecundario("../src/assets/silla1.jpg")}
            {proyectoSecundario("../src/assets/pelota1.png")}
            {proyectoSecundario("../src/assets/robot1.jpg")}
            {proyectoSecundario("../src/assets/habitacionSecundaria1.jpg")}
          </div>
        </div>
    </div>
  );
}

export default ReturnProyectos;


function proyecto(descripcion: string,direccionImagen1: string,direccionImagen2: string){
    return (
        <div className='proyectoPrincipal'>
            <div className='proyectoPrincipalPresentacion'>
              <img className ='imagenProyectoPrincipal' src={direccionImagen1} alt="" />
            </div>
            <div className='proyectoPrincipalDescripcion'>
                <img className ='imagenProyectoSecundaria' src={direccionImagen2} alt="" />
                <div className='descripcionProyecto'>{descripcion}</div>
            </div>
    
        </div>
      );
}

function proyectoSecundario(imagen: string){
return (
  <div className='proyectoSecundario'>
    <img className= "imagenProyectoSecundario" src={imagen} alt="" />
  </div>
)

}