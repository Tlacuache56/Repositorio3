import React from  "react";
import './Busqueda.css';
import {DirectorioContext, DirectorioProvider} from './Context/DirectorioProvider';
//import {DirectorioContext} from "../Context/DirectorioContext";

function Busqueda(props){

    const{textoBusqueda,setTextoBusqueda}=React.useContext(DirectorioContext);

    function onBusquedaChange(event){
        setTextoBusqueda(event.target.value);
    }

    return(
        <React.Fragment>
            <input onChange={onBusquedaChange} value={textoBusqueda}></input>
        </React.Fragment>
    );
}

export default Busqueda;