import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contenido from "./componentes/Contenido.js";
import Header from "./componentes/Header.js";
import NavBar from "./componentes/NavBar.js";
import Footer from "./componentes/Footer.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="container">
    <Header/>
    <NavBar/>
    <Contenido/>
    <Footer  />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
