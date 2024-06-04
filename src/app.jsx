import { Presentacion } from './presentacion';
import { Footer } from './footer';
import { Segmento } from './segmento'
import { Nava } from './nava'




export const App = () => {
    return (
       
              <div className="app">
                <Nava />
                <div className="main-content">
                  <Presentacion className="fondo"/>
                  <Segmento />
                </div>
                <Footer />
              </div>
        
    );
};

