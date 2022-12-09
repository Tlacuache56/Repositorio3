import logo from './logo.svg';
import './App.css';
import React from 'react';

import Busqueda from './Busqueda';
import ListaContactos from './ListaContactos';
import Contactos from './Contactos';
import AgregaContacto from './AgregaContacto';
import {DirectorioContext, DirectorioProvider} from './Context/DirectorioProvider';
function App() {
  //let contactos=[
    //{
      //nombre:"Roberto",
      //telefono:"1234567890",
      //correo:"roberto@gmail.com",
    //},
    //{
      //nombre:"Matteo",
      //telefono:"0987654321",
      //correo:"matteo@gmail.com",
    //},
    //{
      //nombre:"Kevin",
      //telefono:"2468101214",
      //correo:"kevin@gmail.com",
    //}
  //]

  return (
    <DirectorioProvider>
      <DirectorioContext.Consumer>
        {
          ({
            contactosFiltrados,
            borrarContacto,
            contadorContactos,
            modal,
            setModal
          })=>(
          <React.Fragment>
      <h1>DIRECTORIO ({contadorContactos})</h1>
      <Busqueda/>
      <button onClick={()=>setModal(true)}>Agregar contacto</button>
      <listaContactos>
        {
          contactosFiltrados.map((contacto)=>{
            return(
              <Contactos
              nombre={contacto.nombre}
              correo={contacto.correo}
              telefono={contacto.telefono}
              borrarContacto={()=>{borrarContacto(contacto.nombre)}}
              />             
            )
          })
        }
        <Contactos/>
      </listaContactos>
      {modal && <AgregaContacto/>}
    </React.Fragment>
    
          )
        }
      </DirectorioContext.Consumer>
    </DirectorioProvider>
  );
}

export default App;
