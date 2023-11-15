import React from "react";
const Contenido =()=>{

    return(
       <div class="row">
       <div class="col-6">
           <div class="mb-3">
               <label for="formGroupExampleInput" class="form-label">Nombre y apellido</label>
               <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre"/>
           </div>
           <div class="mb-3">
               <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
               <textarea class="form-control"  rows="7"></textarea>
           </div> 
         
           <button type="button" class="btn col-12">Enviar</button>
           <button type="button" class="btn col-12">Limpiar</button>
       </div>
       <div class="col-6 textoLargo">
           <h3>Contacta con nosotros</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ut! Esse est velit consectetur fuga illum id, possimus assumenda accusantium ea tempore consequatur beatae voluptates, in excepturi iusto fugit eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officiis, odit a eveniet, fugiat perspiciatis accusantium, recusandae quo molestiae quam repellendus in reprehenderit facere ab iste quisquam saepe dolor voluptas? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis sed unde velit rerum! Iste voluptate nulla est aliquid atque nostrum beatae libero, soluta corporis, voluptates, dolores tenetur eligendi similique?</p>
       </div>
   </div>
    );
    }
    export default Contenido;