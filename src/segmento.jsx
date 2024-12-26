
import Accordion from 'react-bootstrap/Accordion';
import { Iconos } from './iconos';
import { Info } from './info';
import { Proyectos } from './proyectos';

export const Segmento=()=> {
  
  return (
    <Accordion defaultActiveKey={['0',"1","2"]} alwaysOpen>
      <Accordion.Item eventKey="0" id="tecnologias">
        <Accordion.Header style={{fontFamily:"fantasy"}}>Tecnologías</Accordion.Header>
        <Accordion.Body className='fondo2'>
         <Iconos></Iconos>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" id="proyectos">
        <Accordion.Header style={{fontFamily:"fantasy"}}>Proyectos</Accordion.Header>
        <Accordion.Body className='fondo2'>
         <Proyectos></Proyectos>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" id="dataPersonal">
        <Accordion.Header style={{fontFamily:"fantasy"}}>Información Personal</Accordion.Header>
        <Accordion.Body className='fondo2'>
          <Info></Info>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

