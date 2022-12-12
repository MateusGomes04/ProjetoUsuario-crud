import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Router'
import Logo from '../components/templetes/Logo'
import Nav from '../components/templetes/Nav'
import Footer from '../components/templetes/Footer'

export default props =>
<BrowserRouter>
<div className='app'>
    <Logo />
    <Nav />
    <Routes />
    <Footer />
</div>
</BrowserRouter>



