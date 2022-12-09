import './AgregaContacto.css';
import React from "react";
import {DirectorioContext} from '../Context/DirectorioProvider'




function AgregaContacto(){
    const {setModal,guardaContacto}=React.useContext(DirectorioContext);
    const [contact,setContact]=React.useState({
        nombre:'',
        correo:'',
        telefono:'',
    })

    function onchangeNombre(event){
        let contactoTemporal=contact;
        contactoTemporal.nombre=event.target.value;
        setContact(contactoTemporal);
    }

    function onchangeCorreo(event){
        let contactoTemporal=contact;
        contactoTemporal.correo=event.target.value;
        setContact(contactoTemporal);
    }

    function onchangeTelefono(event){
        let contactoTemporal=contact;
        contactoTemporal.telefono=event.target.value;
        setContact(contactoTemporal);
    }

    function modalCancelar(){
        setModal(false);
    }

    function modalGuardar(event){
        event.preventDefault();
        guardaContacto(contact);
        setModal(false);
    }
    return(
        <div>
            <div>
                <button>{"[+] Contacto"}</button>
            </div>
            <div>
                <form>
                    <label for="Nombre">Nombre:
                    <input id="casillas" onChange={onchangeNombre}></input>
                    </label><br></br>
                    <label for="Nombre">Correo:
                    <input id="casillas" onChange={onchangeCorreo}></input>
                    </label><br></br>
                    <label for="Nombre">Numero:
                    <input id="casillas" onChange={onchangeTelefono}></input>
                    </label><br></br>
                    <button className='Guardar' typeof="submit" onClick={modalGuardar}>Guardar</button>
                    <button className='Cancelar' onClick={modalCancelar}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default AgregaContacto;