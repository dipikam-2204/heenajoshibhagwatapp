import React, {useState } from "react";
import propertyImage from './View/propertyImage.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View/App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from './ModalForm';



function PropertyCard(){
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return(
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
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Open House Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ModalForm />
        </Modal.Body>
        </Modal>
      </Card.Body>  
      </Card>
      
);
}
export default PropertyCard;