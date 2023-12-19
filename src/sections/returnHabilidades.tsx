import '../App.css';
import '../styles/descripcion.css'
import '../styles/habilidades.css'

function ReturnHabilidades() {
  return (
    <section className='habilidades' id="habilidades">
    <div className='habilidades'>
      <h2 id='tituloHabilidades'>Habilidades</h2>
      <ul className='listaHabilidades'>  
        <li className='elementoListasHabilidades'>Modelado 3D</li>
        <li className='elementoListasHabilidades'>Animación</li>
        <li className='elementoListasHabilidades'>Iluminación</li>
        <li className='elementoListasHabilidades'>Materiales</li>
      </ul>
      <ul className='listaHabilidadesImagenes'>  {/*estas listas se pueden reemplazar por algo variable*/}        
        <li className='elementoListasHabilidadesImagenes'>
            <img src="https://i.imgur.com/iOIOUD3.png" alt="MDN"/>
        </li>
        <li className='elementoListasHabilidadesImagenes'>
            <img src="https://i.imgur.com/ijdDq3h.png" alt="MDN"/>
        </li>
        <li className='elementoListasHabilidadesImagenes'>
            <img src="https://i.imgur.com/LYImmGD.png" alt="MDN"/>
        </li>
        <li className='elementoListasHabilidadesImagenes'>
            <img src="https://i.imgur.com/c4k8GnW.png" alt="MDN"/>
        </li>
        
      </ul>
    </div>
    </section>
  );
}

export default ReturnHabilidades;
