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

function ModalForm(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    const [isVaccinated, setIsVaccinated] = useState();
    const [isInContact, setIsInContact] = useState();
    const [hasTravelled, sethasTravelled] = useState();
    const [hasAgent, sethasAgent] = useState();
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    
      setValidated(true);
    };
      return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
            <Form.Control.Feedback type="invalid">
                Please provide your First Name.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />   
            <Form.Control.Feedback type="invalid">
                Please provide your Last Name.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom03" className="radioMargin">
      <Form.Label>
      Have you been Vaccinated?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="4" controlId="validationCustom3">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          checked={isVaccinated}
          setter={setIsVaccinated}
          name="formHorizontalRadios31"
          id="formHorizontalRadios31"
        />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom3">
        <Form.Check
          type="radio"
          label="No"
          value="No"
          checked={isVaccinated}
          setter={setIsVaccinated}
          name="formHorizontalRadios31"
          id="formHorizontalRadios31"
        />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom04" className="radioMargin">
      <Form.Label>
      Have you experienced any COVID symptoms or have come in contact with anyone who has COVID/symptoms in the past 48 hours?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="4" controlId="validationCustom4">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          checked={isInContact}
          setter={setIsInContact}
          name="formHorizontalRadios41"
          id="formHorizontalRadios41"
        />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom4">
        <Form.Check
          type="radio"
          label="No"
          value="No"
          checked={isInContact}
          setter={setIsInContact}
          name="formHorizontalRadios41"
          id="formHorizontalRadios41"
        />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom05" className="radioMargin">
      <Form.Label>
      Have you travelled out of CA in last 14 days?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="4" controlId="validationCustom5">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          checked={hasTravelled}
          setter={sethasTravelled}
          name="formHorizontalRadios51"
          id="formHorizontalRadios51"
        />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom5">
        <Form.Check
          type="radio"
          label="No"
          value="No"
          checked={hasTravelled}
          setter={sethasTravelled}
          name="formHorizontalRadios51"
          id="formHorizontalRadios51"
        />
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom06" className="radioMargin">
      <Form.Label>
      Do you have a Realtor you are working with?
      </Form.Label>
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group as={Col} md="4" controlId="validationCustom6">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          checked={hasAgent}
          setter={sethasAgent}
          name="formHorizontalRadios61"
          id="formHorizontalRadios61"
        />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom6">
        <Form.Check
          type="radio"
          label="No"
          value="No"
          checked={hasAgent}
          setter={sethasAgent}
          name="formHorizontalRadios61"
          id="formHorizontalRadios61"
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
    );
    }
export default ModalForm;