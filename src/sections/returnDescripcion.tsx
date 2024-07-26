import '../App.css';
import '../styles/descripcion.css'


function ReturnDescripcion() {
  return (
    <section id="descripcion">
    <div className='descripcion'>
      <img src="https://i.imgur.com/Fjn1JTu.jpeg" alt="MDN" id='fotoPerfil'/>
      <h1 id='saludoPrincipal'>¡Hola! Soy Luciana</h1>    
      <h3 id='ubicacion'>Mendoza, Argentina</h3>
      <div id='descripcion'>Estoy recien graduada en la Tecnicatura Universitaria en Diseño y Animación Digital de la Universidad Siglo 21. Tengo 24 años y estoy entusiasmada por encontrar mi primera experiencia laboral en el campo. Me apasiona crear y dar vida a ideas a través del arte digital, y estoy ansiosa por aplicar mis habilidades y aprender en un entorno profesional.
<br/>¡Te invito a explorar mis trabajos!
</div>
      <img src="https://i.imgur.com/XZNCh1Q.png" alt="MDN" id='fotoSiglo21'/>
    </div>
    </section>
  );
}

export default ReturnDescripcion;
