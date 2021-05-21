
import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './View/App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function ModalForm(){
    const [validated, setValidated] = useState(false);
    const [values,setValues]=useState(' ');
    const [isVaccinated] = useState();
    const [isInContact] = useState();
    const [hasTravelled] = useState();
    const [hasAgent] = useState();
    const set = name => {
      return ({ target: { value } }) => {
        setValues(oldValues => ({...oldValues, [name]: value }));
      }
    };

  const saveFormData = async () => {
    const response = await fetch('/api/registration', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(values)
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
    
  }
  
    const handleSubmit = async (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        await saveFormData();
      }
        setValidated(true);
       
    }
    
      return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            value={values.first_name} 
            onChange={set('first_name')}
            placeholder="First name"/>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            value={values.last_name} 
            onChange={set('last_name')}
            placeholder="Last name"/>   
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" className="radioMargin">
      <Form.Label>
      Have you been Vaccinated?
      </Form.Label>
      <Form.Group as={Col} md="4" controlId="validationCustom03">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          checked={isVaccinated}
          onChange={set('vaccinated')}
          //setter={setIsVaccinated}
          required
          name="formHorizontalRadios3"
          id="formHorizontalRadios31"/>
        <Form.Check
          type="radio"
          label="No"
          value="No"
          required
          //checked={isVaccinated}
          onChange={set('vaccinated')}
          //setter={setIsVaccinated}
          name="formHorizontalRadios3"
          id="formHorizontalRadios31"
        />
        </Form.Group>
        </Form.Group>
      </Form.Row>
     <Form.Row>
      <Form.Group md="8" className="radioMargin">
      <Form.Label>
      Have you experienced any COVID symptoms or have come in contact with anyone who has COVID/symptoms in the past 48 hours?</Form.Label>
      <Form.Group as={Col} md="4" controlId="validationCustom4">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          required
          checked={isInContact}
          onChange={set('symptoms')}
          //setter={setIsInContact}
          name="formHorizontalRadios4"
          id="formHorizontalRadios41"/>
        <Form.Check
          type="radio"
          label="No"
          value="No"
          required
          checked={isInContact}
          onChange={set('symptoms')}
          //setter={setIsInContact}
          name="formHorizontalRadios4"
          id="formHorizontalRadios41"/>
        </Form.Group>
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" className="radioMargin">
      <Form.Label>
      Have you travelled out of CA in last 14 days?
      </Form.Label>
      <Form.Group as={Col} md="4" controlId="validationCustom5">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          checked={hasTravelled}
          onChange={set('travelled')}
          //setter={sethasTravelled}
          name="formHorizontalRadios5"
          id="formHorizontalRadios51"
        />
        <Form.Check
          type="radio"
          label="No"
          value="No"
          checked={hasTravelled}
          onChange={set('travelled')}
          //setter={sethasTravelled}
          name="formHorizontalRadios5"
          id="formHorizontalRadios51"
        />
        </Form.Group>
        </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group md="8" controlId="validationCustom06" className="radioMargin">
      <Form.Label>
      Do you have a Realtor you are working with?
      </Form.Label>
      <Form.Group as={Col} md="4" controlId="validationCustom6">
        <Form.Check
          type="radio"
          label="Yes"
          value="Yes"
          checked={hasAgent}
          onChange={set('realtor')}
          name="formHorizontalRadios6"
          id="formHorizontalRadios61"
        />
        <Form.Check
          type="radio"
          label="No"
          value="No"
          checked={hasAgent}
          onChange={set('realtor')}
          name="formHorizontalRadios6"
          id="formHorizontalRadios61"
        />
        </Form.Group>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group>
          <Form.Label>Would you like us to send you an update on disclosures and reports. If Yes please share your email below.</Form.Label>
          <Form.Control type="text" placeholder="email" required value={values.email_id} 
            onChange={set('email_id')}/>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group>
          <Form.Label>Would you like us to send you a status of how many offers came in and what the house finally sold for. If Yes please share your number so that we can text you this info.</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" required  value={values.phone_number} 
            onChange={set('phone_number')}/>
          <Form.Control.Feedback type="invalid">
          Please provide your response.
          </Form.Control.Feedback>
        </Form.Group>
        </Form.Row> 
      <Button type="submit" >Submit form</Button>
    </Form>
    );
    }
export default ModalForm;