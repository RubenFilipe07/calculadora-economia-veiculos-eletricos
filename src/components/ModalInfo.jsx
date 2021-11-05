import React, {Fragment, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


export default function ModalInfo() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <Fragment>
        <img alt="informação" height="18" width="18" src="info-square-fill.svg" onClick={handleShow}></img>    
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Como calcular consumo médio?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Divida a autonomia do veículo pela capacidade total da bateria. <br/>
            Ex.: 400Km/55kWh = 8Km/kWh
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>OK</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
  

  