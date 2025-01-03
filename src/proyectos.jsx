
import "./proyectos.css";

export const Proyectos = () => {
  return (
    <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2em", marginBottom:"2em" }} id="proyectos">
      <div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center",marginTop:"2em"}}>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <img
            src="/assets/zepiro1.png"
            alt="imagen de zepiro.netlify.app"
            style={{ maxWidth: "90%", border: "3px solid red", borderRadius: "1em", display: "block", margin: "0 auto" }}
          />
        </div>

        <div className="col-md-6" style={{ padding: "1em", textAlign: "justify" }}>
          <p>
            Descripción:
            Es una aplicación diseñada para un juego de rol llamado Zepiro. Permite gestionar las cuentas y personajes de los jugadores,
            además de facilitar la organización y desarrollo de las partidas de juego. La aplicación está desplegada en Render.com.
          </p>
          <div className="row" style={{ justifyContent: "center" }}>
      
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
            </div>
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            </div>
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </div>
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </div>
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
            </div>
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" />
            </div>
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            </div>
            <div style={{ width: "4em" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg" />
            </div>
            <div style={{ width: "4em", marginTop: "3px" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            </div>
          </div>
          <div style={{ margin: "1em", textAlign: "center" }}>
            <a href="http://znk.onrender.com" target="_blank">znk.onrender.com</a>
          </div>
          <div style={{ margin: "1em", textAlign: "center" }}>
            <a href="https://github.com/ronnin47/newAppZnk.git" target="_blank">ir a proyecto en github</a>
          </div>
        </div>
      </div>

      <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <img
            src="/assets/zepiro2.png"
            alt="imagen de proyecto znk"
            style={{ maxWidth: "90%", border: "3px solid red", borderRadius: "1em", display: "block", margin: "0 auto" }}
          />
        </div>

        <div className="col-md-6" style={{ padding: "1em", textAlign: "justify" }}>
          <p>
            Descripción: Trata de una aplicación web con renderizado en Vanilla Js, con login, autorización y control de usuarios. La página es propia para un juego que permite crear personajes y todas sus modificaciones en tiempo real con socket.io. Su base de datos es MySQL.
          </p>
          <div className="row" style={{ justifyContent: "center" }}>
          <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                  </div>
                  <div style={{width:"4em"}}> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />         
                  </div>
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />        
                  </div> 
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"/>
                  </div> 
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />        
                  </div>
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                  </div>
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg" />
                  </div>       
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                  </div>
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                  </div>
          </div>
          <div style={{ margin: "1em", textAlign: "center" }}>
            <a href="https://github.com/ronnin47/paginaZnkPro.git" target="_blank">ir a proyecto en github</a>
          </div>
        </div>
      </div>

      <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="col-md-6" style={{ textAlign: "center" }}>
          <img
            src="/assets/zepiro3.png"
            alt="imagen de zepiro.netlify.app"
            style={{ maxWidth: "90%", border: "3px solid red", borderRadius: "1em", display: "block", margin: "0 auto" }}
          />
        </div>

        <div className="col-md-6" style={{ padding: "1em", textAlign: "justify"}}>
          <p>
            Descripción: Trata de una aplicación front React para mostrar contenido de un juego de rol. Combinando botones y mostrando información de los posibles personajes y contextos.
          </p>
          <div className="row" style={{ justifyContent: "center" }}>   
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                  </div>
                  <div style={{width:"4em"}}> 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />         
                  </div>
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />        
                  </div> 
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                  </div>
                  <div style={{width:"4em"}}>  
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                  </div>
                  <div style={{width:"4em"}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" />
                  </div>
        
          </div>
          <div style={{ margin: "1em", textAlign: "center" }}>
            <a href="http://universoznk.netlify.app" target="_blank">ir a universoznk.netlify.app</a>
          </div>
          <div style={{ margin: "1em", textAlign: "center" }}>
            <a href="https://github.com/ronnin47/generadorznk.git" target="_blank">ir a proyecto en github</a>
          </div>
        </div>
      </div>
    </div>
  );
};