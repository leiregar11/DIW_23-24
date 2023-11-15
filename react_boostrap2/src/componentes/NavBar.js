import React from "react";
const NavBar =()=>{

    return(
        <header class="container-fluid">
        
        <div class="row">
                
            <nav class="navbar navbar-expand-lg NavFooter">
                <div class="container-fluid ">
                  <div class="col-xl-8 col-7" id="logoHome">
                    <a class="navbar-brand" href="index.html"><h1><img src="img/escudo.png" id="escudo"/>Legazpi</h1></a>
                
                  </div>
                    
                      <button class="navbar-toggler ml-auto custom-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
    
                    
                      
                      <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                          <li class="nav-item btn">
                            <a class="nav-link " aria-current="page" href="Historia.html">Historia</a>
                          </li>
                          <li class="nav-item btn">
                            <a class="nav-link " aria-current="page" href="Fiestas.html">Fiestas</a>
                          </li>
                         
                          
                          <li class="nav-item btn ">
                            <a class="nav-link active" href="Contacto.html">Contactanos</a>
                          </li>
                        </ul>
                    
                  </div>
                </div>
              </nav>
    
    
              
            </div>
            
    </header>
    );
}
export default NavBar;