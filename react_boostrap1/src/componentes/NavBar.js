import React from "react";
import '../index.css';


const navBar =()=>{

return(
    <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link " href="#">Inicio</a>
                    <a class="nav-link" href="#">Quienes</a>
                    <a class="nav-link" href="#">Cursos</a>
                    <a class="nav-link" href="#">Situación</a>
                    <a class="nav-link" href="#">Contacto</a>
                </div>
                </div>
            </div>
        </nav>
);
}
export default navBar;