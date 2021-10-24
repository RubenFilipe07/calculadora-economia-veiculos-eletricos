import React from 'react'
import { Fragment } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/formulario'
import Footer from './components/footer'

ReactDOM.render(
    <Fragment>
        <Formulario />
        <Footer />
    </Fragment>, document.getElementById('root'));



