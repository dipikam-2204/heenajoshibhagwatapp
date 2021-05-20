import logo from './View/logo.jpg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './View/App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropertyCard from './PropertyCard';



function App()  {
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
export default App;
