import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/templetes/Logo'
import Nav from '../components/templetes/Nav'
import Main from '../components/templetes/Main'
import Footer from '../components/templetes/Footer'

export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Main icon='home' title='Início' 
            subtitle='Segundo Projeto do capítulo de React.'/>
        <Footer />
    </div>

