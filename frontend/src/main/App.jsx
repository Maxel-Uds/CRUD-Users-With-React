import React from 'react';
import Logo from '../components/templates/Logo';
import Nav from '../components/templates/Nav';
import Footer from '../components/templates/Footer';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

export default function app(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo/>
                <Nav/>
                <Routes/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}