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
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />   
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom02" className="radioMargin">
      <Form.Label>
      Have you been Vaccinated?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom02" className="radioMargin">
      <Form.Label>
      Have you experienced any COVID symptoms or have come in contact with anyone who has COVID/symptoms in the past 48 hours?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom02" className="radioMargin">
      <Form.Label>
      Have you travelled out of CA in last 14 days?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom02" className="radioMargin">
      <Form.Label>
      Do you have a Realtor you are working with?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group>
          <Form.Label>Would you like us to send you an update on disclosures and reports. If Yes please share your email below.</Form.Label>
          <Form.Control type="text" placeholder="email" required />
          <Form.Control.Feedback type="invalid">
            Please provide your response.
          </Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group>
          <Form.Label>Would you like us to send you a status of how many offers came in and what the house finally sold for. If Yes please share your number so that we can text you this info.</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" required />
          <Form.Control.Feedback type="invalid">
          Please provide your response.
          </Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
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
