import logo from './View/logo.jpg';
import React from "../node_modules/@types/react";
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './View/App.css';
import Navbar from '../node_modules/react-bootstrap/esm/Navbar';
import Nav from '../node_modules/react-bootstrap/esm/Nav';
import PropertyCard from './PropertyCard';



function Home()  {
  return (
    <div>
    <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Nav className="mr-auto"> 
    <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="90"
        height="90"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar>
    </Nav>
    <Nav>
      <Nav.Link className="agentName" href="https://www.compass.com/agents/heena-joshi/">
        Heena Joshi
      </Nav.Link>
    </Nav>
    </Navbar>
    </div>
    <div>
      <PropertyCard />
    </div>
    </div>
  );
}
export default Home;
