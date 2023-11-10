import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReturnDescripcion from './sections/returnDescripcion'; 
import ReturnHabilidades from './sections/returnHabilidades'; 
import ReturnProyectos from './sections/returnProyectos'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='barraBotones'>
        <a href="https://vitejs.dev" target="_blank">
          <h2>Sobre mi</h2>
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <h2>Habilidades</h2>
        </a><a href="https://vitejs.dev" target="_blank">
          <h2>Proyectos</h2>
        </a><a href="https://vitejs.dev" target="_blank">
          <h2>Contacto</h2>
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
