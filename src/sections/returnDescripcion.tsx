import '../App.css';
import '../styles/descripcion.css'


function ReturnDescripcion() {
  return (
    <section id="descripcion">
    <div className='descripcion'>
      <img src="https://i.imgur.com/HBUf9Uz.jpg" alt="MDN" id='fotoPerfil'/>
      <h1 id='saludoPrincipal'>¡Hola! Soy Luciana</h1>    
      <h3 id='ubicacion'>Mendoza, Argentina</h3>
      <div id='descripcion'>Estudiante de la Tecnicatura Universitaria en Diseño y Animación Digital. Tengo 24 años y me encuentro en busca de mi primera experiencia en el área del modelado 3D.</div>
      <img src="https://i.imgur.com/XZNCh1Q.png" alt="MDN" id='fotoSiglo21'/>
    </div>
    </section>
  );
}

export default ReturnDescripcion;
