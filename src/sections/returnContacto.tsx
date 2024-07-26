import '../App.css';
import '../styles/contacto.css'


function ReturnContacto() {
  return (
    <section id="contacto">
    <div className='descripcion'>
      
      <h1 id='tituloContacto'>Contacto</h1>   
      
      <a className='bloqueContacto' href="https://1drv.ms/b/c/eeb3ee7102904988/Ef6biSD4_5dCsR2EUWPxSgEB-_CHa7zGaGg0TSK_wuUDHA?e=UW8noa">
        <img className="imgContacto" src="https://i.imgur.com/lT0Caej.png" alt="" />
        <h3 className='dato'>Curriculum Vitae </h3></a>


      <div className='bloqueContacto'>
        <img className="imgContacto" src="https://i.imgur.com/rS4Ualg.png" alt="" />
        <h3 className='dato'>lucianammateo@gmail.com</h3></div>


      <a className='bloqueContacto' href="http://www.linkedin.com/in/luciana-mateo-941156268">
        <img className="imgContacto" src="https://i.imgur.com/htZrdbY.png" alt="" />
        <h3 className='dato'>http://www.linkedin.com/in/luciana-mateo-941156268/</h3></a>

      <a className='bloqueContacto' href="https://wa.link/bi981v">
       <img className="imgContacto" src="https://i.imgur.com/m4dFbZy.png" alt="" />
        <h3 className='dato'>+542616187209</h3></a>

    </div>
    </section>
  );
}

export default ReturnContacto;
