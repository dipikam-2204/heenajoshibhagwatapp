import logo from './View/logo.jpg';
import React, {useState } from "react";
import propertyImage from './View/propertyImage.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View/App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={propertyImage} />
      <Card.Body>
      <Card.Title>1296 Milkweed Street</Card.Title>
      <Card.Text>
          Knock these forms out, before you knock on the door
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>
        Click Here
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Body>  
      </Card>
      </div>
      </div>
  );
}

export default App;
