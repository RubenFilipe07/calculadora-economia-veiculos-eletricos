import React, {Component} from "react";
import './formulario.css'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

      this.setState({ precoViagemCombustao: "Viagem do veículo a combustão: R$" + valorViagemCombustao.toFixed(2)})
      this.setState({ precoViagemEletrico: "Viagem do veículo elétrico: R$" + valorViagemEletrico.toFixed(2)})

      this.setState({ resultado: "Economia: R$" + valorEconomizado.toFixed(2)})
     
      event.preventDefault();

    }
  
    render() {
        const {resultado, precoViagemEletrico, precoViagemCombustao} = this.state;
      return (
        <Form onSubmit={this.handleSubmit} className="formulario">
            <Card.Title className="text-center">Calcule a economia de um veículo elétrico</Card.Title>

            <Form.Group className="mb-3">
                    <Form.Label>Distância percorrida (km)</Form.Label>
                    <Form.Control value={this.state.distanciaPercorrida} name="distanciaPercorrida" onChange={this.handleChange} type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

                <hr></hr>

                <Card.Title>Veículo a combustão</Card.Title>
                <Form.Group className="mb-3">
                    <Form.Label>Consumo médio (km/litro)</Form.Label>
                    <Form.Control value={this.state.consumoCombustao} name="consumoCombustao" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Preço do combustível (R$/litro)</Form.Label>
                    <Form.Control value={this.state.precoCombustao} name="precoCombustao" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

                <hr></hr>


                <Card.Title>Veículo a elétrico</Card.Title>
                <Form.Group className="mb-3">
                    <Form.Label>Consumo médio (km/kWh)</Form.Label>
                    <Form.Control value={this.state.consumoEletrico} name="consumoEletrico" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} data-toggle="tooltip" data-placement="left" title="Dividir a autonomia do veículo pela capacidade total da bateria. Ex.: 400Km/55kWh = 8Km/kWh" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Preço da energia (R$/kWh)</Form.Label>
                    <Form.Control value={this.state.precoEletrico} name="precoEletrico" onChange={this.handleChange}  type="number" onWheel={(e) => e.target.blur()} />
                </Form.Group>

            
          <Button variant="success" className="btn-calcular" type="submit">Calcular</Button>

          <div className="resultados">
            <h5>{precoViagemCombustao}</h5>
            <h5>{precoViagemEletrico}</h5>
            <h3>{resultado}</h3>
          </div> 
      
        </Form>
      );
    }
  }

  export default Formulario