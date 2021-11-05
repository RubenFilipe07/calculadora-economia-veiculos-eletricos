import React from 'react'
import { Fragment } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario'
import Footer from './components/Footer'

ReactDOM.render(
    <Fragment>
        <Formulario />
        <Footer />
    </Fragment>, document.getElementById('root'));



