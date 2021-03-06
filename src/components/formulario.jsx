import React, {Component} from "react";
import './formulario.css'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from './ModalInfo'

class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = {
        distanciaPercorrida: '',
        consumoCombustao: '',
        precoCombustao: '',
        consumoEletrico: '',
        precoEletrico: '',
        precoViagemCombustao: '',
        precoViagemEletrico: '',
        resultado: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
      const distanciaPercorrida = this.state.distanciaPercorrida
      const consumoCombustao = this.state.consumoCombustao
      const precoCombustao = this.state.precoCombustao
      const consumoEletrico = this.state.consumoEletrico
      const precoEletrico = this.state.precoEletrico

      let valorViagemCombustao = (distanciaPercorrida / consumoCombustao) * precoCombustao
      let valorViagemEletrico = (distanciaPercorrida / consumoEletrico) * precoEletrico
  
      let valorEconomizado = valorViagemCombustao - valorViagemEletrico

      this.setState({ precoViagemCombustao: valorViagemCombustao.toFixed(2)})
      this.setState({ precoViagemEletrico: valorViagemEletrico.toFixed(2)})

      this.setState({ resultado: valorEconomizado.toFixed(2)})
     
      event.preventDefault();

    }

    limpaForm = () =>{
      this.setState({
        distanciaPercorrida: '',
        consumoCombustao: '',
        precoCombustao: '',
        consumoEletrico: '',
        precoEletrico: '',
        resultado: ''
      });
    }
  
    render() {
        const {resultado, precoViagemEletrico, precoViagemCombustao} = this.state;
      return (
        <Form onSubmit={this.handleSubmit} className="formulario">
            <Card.Title className="text-center">Calcule a economia de um ve??culo el??trico</Card.Title>

            <Form.Group className="mb-3">
                    <Form.Label htmlFor="distanciaPercorrida">Dist??ncia percorrida (km)</Form.Label>
                    <Form.Control value={this.state.distanciaPercorrida} id="distanciaPercorrida" name="distanciaPercorrida" onChange={this.handleChange} type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

                <hr></hr>

                <Card.Title>Ve??culo a combust??o</Card.Title>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="consumoCombustao">Consumo m??dio (km/litro)</Form.Label>
                    <Form.Control value={this.state.consumoCombustao} id="consumoCombustao" name="consumoCombustao" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="precoCombustao">Pre??o do combust??vel (R$/litro)</Form.Label>
                    <Form.Control value={this.state.precoCombustao} id="precoCombustao" name="precoCombustao" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

                <hr></hr>

                <Card.Title>Ve??culo el??trico</Card.Title>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="consumoEletrico">Consumo m??dio (km/kWh) <Modal titulo="Como calcular consumo m??dio?" conteudo="Divida a autonomia do ve??culo pela capacidade total da bateria. Ex.: 400Km/55kWh = 8Km/kWh"></Modal></Form.Label>
                    <Form.Control value={this.state.consumoEletrico} id="consumoEletrico" name="consumoEletrico" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} />
                   
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="precoEletrico">Pre??o da energia (R$/kW)</Form.Label>
                    <Form.Control value={this.state.precoEletrico} id="precoEletrico" name="precoEletrico" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

          <Button variant="danger" className="btn-limpar" type="submit" onClick={this.limpaForm}>Limpar</Button>
          <Button variant="primary" className="btn-calcular" type="submit">Calcular</Button>
     
          {isNaN(resultado) || resultado === "" ? "" :
          <div>
            <hr/>
            <Card>
              <Card.Header>
                <b>Resultado</b>
              </Card.Header>

              <Card.Body>
                <p>
                  <span>{isNaN(precoViagemCombustao) ||  precoViagemCombustao === "" ? "" : "Viagem do ve??culo a combust??o: R$"+ precoViagemCombustao}</span>
                </p>

                <p>
                  <span>{isNaN(precoViagemEletrico) || precoViagemEletrico === "" ? "" : "Viagem do ve??culo el??trico: R$" + precoViagemEletrico}</span>
                </p>

                <p>
                  <span>{isNaN(resultado) || resultado === "" ? "" : "Economia: R$" + resultado}</span>
                </p>
              </Card.Body>
            </Card>
          </div>
         }

        </Form>
      );
    }
  }

  export default Formulario