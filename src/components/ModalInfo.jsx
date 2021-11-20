import React, {Fragment, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'


export default function ModalInfo(props) {
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
            <Modal.Title>{props.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<<<<<<< HEAD
          {props.conteudo}
=======
            Divida a autonomia do veículo pela capacidade total da bateria. <br/>
            Ex.: 400Km/50kWh = 8Km/kWh
>>>>>>> 9af8949548f80781aadfa152f9a9306dfba2b90e
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>OK</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
  

  