import '../App.css';
import '../styles/descripcion.css'


function ReturnDescripcion() {
  return (
    <section id="descripcion">
    <div className='descripcion'>
      <img src="https://i.imgur.com/Fjn1JTu.jpeg" alt="MDN" id='fotoPerfil'/>
      <h1 id='saludoPrincipal'>¡Hola! Soy Luciana</h1>    
      <h3 id='ubicacion'>Mendoza, Argentina</h3>
      <div id='descripcion'>Estudiante de la Tecnicatura Universitaria en Diseño y Animación Digital. Tengo 24 años y me encuentro en busca de mi primera experiencia en el área del Diseño y Animación Digital.</div>
      <img src="https://i.imgur.com/XZNCh1Q.png" alt="MDN" id='fotoSiglo21'/>
    </div>
    </section>
  );
}

export default ReturnDescripcion;
