
import 'animate.css';


export const Presentacion = () => {
const flip=(event)=>{
  console.log("funciona")
  event.target.classList.add('animate__animated', 'animate__flip');
  
  setTimeout(() => {
    event.target.classList.remove('animate__flip');
  }, 1000);
  
}
  return (
    <div className="container">
    <div className='presentaciones'>
      <div className="animate__animated animate__fadeInLeft" style={{ display: "flex",justifyContent:"center" }}>
        <img src="./assets/foto.png" alt="mi foto" id='foto' className="foto" onClick={flip} style={{ maxWidth: "100%"}} />
      </div>
      <div style={{fontFamily:"Georgia"}}>
        <p>Sobre mi:</p>
        <p style={{fontFamily:"Georgia"}}>Soy un desarrollador apasionado por el aprendizaje constante, y eso es precisamente lo que me atrajo al mundo de las tecnologías digitales. Me encanta enfrentarme a problemáticas complejas porque me considero un solucionador nato. Disfruto absorbiendo conocimientos y tomando como inspiración a desarrolladores más avanzados, viéndolos como metas que me impulsan a crecer. Encuentro en JavaScript una representación de mi filosofía: su tipado débil y naturaleza libre reflejan cómo entiendo el progreso, un camino sin seguridades absolutas, pero lleno de oportunidades para explorar, experimentar y aprender. Este enfoque me ha llevado a trabajar con una variedad de herramientas y tecnologías, como React, Node.js, PostgreSQL, y más, siempre buscando formas de innovar y construir soluciones útiles.</p>
       
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
        <p style={{ fontFamily: "cursive", marginBottom: "0px" }}>
        "La perfección es una pulida colección de errores"
        </p>
        <p style={{ marginTop: "0px", fontFamily: "fantasy" }}>Mario Benedetti</p>
        </div>
      
      </div>
    </div>
  </div>
  )
}


