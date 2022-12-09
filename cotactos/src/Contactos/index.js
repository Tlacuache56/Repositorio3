import React from "react";




function Contactos(props){

    function borrar(){
        props.borrarContacto();
    }
    return(
        <div>
            <p>{props.nombre}</p>
            <p>{props.correo}</p>
            <p>{props.telefono}</p>
            <button onClick={borrar}>Borrar</button>
        </div>
    )
}

export default Contactos;