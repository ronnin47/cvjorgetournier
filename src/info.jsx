

import cvPDF from '/assets/cv.pdf'; 

export const Info = () => {
  const desacrgarCv=()=>{
   console.log("funciona el btn descargar CV")
   // Crear un enlace temporal
   const link = document.createElement('a');
   link.href = cvPDF;
   // Especificar el nombre del archivo para descargar
   link.download = 'cv.pdf';
   // Simular el clic en el enlace para iniciar la descarga
   link.click();
  }

  const miLinkedin="https://www.linkedin.com/in/jorge-a-tournier/"

  return (
    <div style={{margin:"1em"}}>
         <div className="container tecnologias" id="info">
         <div className="dataPersonal">
          <p>Nombre: Jorge Alcides Tournier</p>
          <p>Fecha de nacimiento: 04/11/1983</p>
          <p>Nacionalidad: Argentino</p>
          <p>Telefono: +5491141997524</p>
          <p>Direccion: Av Peron 3843 San Martin Caba</p>
          <p>E-mail: tempesttempest66@gmail.com</p>
         
        
          
          <a href="https://www.linkedin.com/in/jorge-a-tournier/" target="_blank" rel="noopener noreferrer">
            {miLinkedin}
          </a>
  



          <div style={{marginTop:"1em"}}>
          <button className="btn btn-primary" onClick={desacrgarCv}>Descargar mi cv</button>
         </div>
         </div>
         
         </div>
    </div>
  )
}


