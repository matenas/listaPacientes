import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
    
    
    //Crear State de citas
    const [cita,setCita] = useState({
        mascota:'',
        dueno:'',
        fechaLlegada:'',
        horaLlegada:'',
        sintomas:''
    });

    //state error 
    const [error,setError] = useState(false);

    //funcion que se ejecuta cada vez que el usuario escribe en un input 
    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //ahora extraigo los valores del state
    const {mascota, dueno, fechaLlegada, horaLlegada, sintomas} = cita;
    

    //cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();

        //validar
        if(mascota.trim() === '' || dueno.trim() === '' || fechaLlegada.trim() === '' || horaLlegada.trim() === '' || sintomas.trim() === '' ) {
            setError(true);
            return;
        } else {

            setError(false);
        }


        //asignar ID
        cita.id = uuidv4()


        //crear Cita

        crearCita(cita);

        //reiniciar valores form
        setCita({
            mascota:'',
            dueno:'',
            fechaLlegada:'',
            horaLlegada:'',
            sintomas:''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form
                onSubmit={submitCita}
            >
                <label htmlFor="">Nombre de la Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota" 
                    onChange={handleChange}
                    value={mascota}
                />
                <label htmlFor="">Nombre del Dueño</label>
                <input 
                    type="text"
                    name="dueno"
                    className="u-full-width"
                    placeholder="Nombre del dueño"  
                    onChange={handleChange}
                    value={dueno}
                />
                <label htmlFor="">Fecha de llegada</label>
                <input 
                    type="date"
                    name="fechaLlegada"
                    className="u-full-width" 
                    onChange={handleChange}
                    value={fechaLlegada}
                />
                <label htmlFor="">Hora de llegada</label>
                <input 
                    type="time"
                    name="horaLlegada"
                    className="u-full-width" 
                    onChange={handleChange}
                    value={horaLlegada}
                />
                <label htmlFor="">Síntomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width" 
                    onChange={handleChange}
                    value={sintomas}
                    ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    >Agregar cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;