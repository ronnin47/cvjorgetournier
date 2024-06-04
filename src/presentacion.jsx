
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
    <div style={{ display: "grid", gridTemplateColumns: "40% 60%", justifyContent: "center", margin: "3em" }}>
      <div className="animate__animated animate__fadeInLeft" style={{ display: "flex" }}>
        <img src="./assets/foto.png" alt="mi foto" id='foto' className="foto" onClick={flip} style={{ maxWidth: "100%", marginLeft: "auto" }} />
      </div>
      <div style={{ marginLeft: "3em" , fontFamily:"Georgia"}}>
        <p>Sobre mi:</p>
        <p style={{fontFamily:"Georgia"}}>Soy un desarrollador apasionado por el aprendizaje profundo, siempre en busca de entender los fundamentos de las diferentes tecnologías que encuentro. Me dedico a explorar nuevas herramientas y técnicas para mejorar continuamente mis habilidades y ofrecer soluciones innovadoras.</p>
      </div>
    </div>
  </div>
  )
}


