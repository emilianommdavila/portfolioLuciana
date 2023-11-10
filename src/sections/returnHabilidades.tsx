import '../App.css';
import '../styles/descripcion.css'
import '../styles/habilidades.css'

function ReturnHabilidades() {
  return (
    <div className='habilidades'>
      <ul className='listaHabilidades'>  
        <li className='elementoListasHabilidades'>Modelado 3D</li>
        <li className='elementoListasHabilidades'>Animación</li>
        <li className='elementoListasHabilidades'>luminación</li>
        <li className='elementoListasHabilidades'>Materiales</li>
      </ul>
      <ul className='listaHabilidadesImagenes'>  {/*estas listas se pueden reemplazar por algo variable*/}        
        <li className='elementoListasHabilidadesImagenes'>
            <img src="../src/assets/programs/afterEffects.png" alt="MDN"/>
        </li>
        <li className='elementoListasHabilidadesImagenes'>
            <img src="../src/assets/programs/illustrator.png" alt="MDN"/>
        </li>
        <li className='elementoListasHabilidadesImagenes'>
            <img src="../src/assets/programs/maya.png" alt="MDN"/>
        </li>
        <li className='elementoListasHabilidadesImagenes'>
            <img src="../src/assets/programs/blender.png" alt="MDN"/>
        </li>
        
      </ul>
    </div>
  );
}

export default ReturnHabilidades;
