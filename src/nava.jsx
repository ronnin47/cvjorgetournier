
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Nava=()=> {


  
  return (
    <Navbar expand="lg"  className="navbar-dark bg-dark mb-3">
      <Container fluid>
        <Navbar.Brand href="#home">Jorge A. Tournier - Full Stack Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link href="#tecnologias">Tecnologias</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#dataPersonal">Informacion personal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



