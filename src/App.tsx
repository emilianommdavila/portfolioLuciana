import './App.css'
import ReturnDescripcion from './sections/returnDescripcion'; 
import ReturnHabilidades from './sections/returnHabilidades'; 
import ReturnProyectos from './sections/returnProyectos'; 
function App() {

  return (
    <>
      <div className='barraBotones'>
        <a href="#descripcion" style={{scrollBehavior: 'smooth'}}>
          <div>Sobre mi</div>
        </a>
        <a href="#habilidades" style={{scrollBehavior: 'smooth'}}>
          <div>Habilidades</div>
        </a><a href="#proyectos" style={{scrollBehavior: 'smooth'}}>
          <div>Proyectos</div>
        </a><a href="" style={{scrollBehavior: 'smooth'}}>
          <div>Contacto</div>
        </a>
      </div>
   {/* Agregar la sección como un componente */}
   <ReturnDescripcion />
   {/* Aca falta agregar una barra separadora */}
   <ReturnHabilidades/>
   <ReturnProyectos />
    </>
  )
}

export default App
