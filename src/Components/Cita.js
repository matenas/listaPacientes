import React from 'react';

const Cita = ({cita, eliminarCita}) => (

    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.dueno}</span></p>
        <p>Fecha de llegada: <span>{cita.fechaLlegada}</span></p>
        <p>Hora de llegada: <span>{cita.horaLlegada}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) }
        >Eliminar &times;</button>
    </div>

);


export default Cita;