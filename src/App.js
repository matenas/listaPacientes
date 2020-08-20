import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario';
import Cita from './Components/Cita';

function App() {

// Citas en local storage
let citasIniciales = JSON.parse(localStorage.getItem('citas'))

// Arreglo de citas
const [citas, setCitas] = useState(citasIniciales ? citasIniciales : [])




//useEffect para realizar ciertas operaciones cuando el state cambia o cuando el componente esta listo, como el document ready de jquery
useEffect(() => {
  localStorage.setItem('citas', JSON.stringify(citas))
}, [citas])






//funcion que tome las citas actuales y agregue la nueva 
const crearCita = (cita) => {
  setCitas([ ...citas , cita ])
}

//funcion eliminar un cita por ID
const eliminarCita = (id) => {
  console.log("elimando...");
  const nuevasCitas = citas.filter(cita => cita.id !== id);
  setCitas(nuevasCitas);
}
//mensaje condicional
const Titulo = citas.length === 0 ? 'No hay citas agendadas' : 'Administra tus citas'

return (
  <Fragment>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario
            crearCita = {crearCita}
          ></Formulario>
        </div>
        <div className="one-half column">
          <h2>{Titulo}</h2>
          {citas.map(cita => (

            <Cita
              key = {cita.id}
              cita = {cita}
              eliminarCita = {eliminarCita}
            ></Cita>
          ))}
        </div>
      </div>
    </div>
  </Fragment>
);
}

export default App;
