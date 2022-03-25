import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../helpers/url';
import '../estilos/registro.css';
import { fileUpload } from '../helpers/fileUpload';
import Navbar from '../components/Navbar'
// import SweetAlert from 'sweetalert-react';

const Registro = () => {



  let initialState = {
    marca: '',
    nombre: '',
    precio: '',
    imagen: '',
    mecanica: ''
  }

  const [auto, setAuto] = useState({
    marca: '',
    nombre: '',
    precio: '',
    imagen: '',
    mecanica: ''

  })

  const { marca, nombre, precio, imagen, mecanica } = auto

  const handleChange = ({ target }) => {
    setAuto({
      ...auto,
      [target.name]: target.value
    })
  }

  const handleFileChanged = e => {
    console.log(e)
    const file = e.target.files[0]
    fileUpload(file)
        .then(resp => auto.imagen = resp)
        .catch(error => console.log(error))
}

  const postData = () => {
    axios.post(url, auto)
      .then(resp => {
        console.log(resp.data)
      })
      .catch(error => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postData()
    setAuto(initialState)
    /* SweetAlert.fire('Any fool can use a computer') */
  }

  return (
    <>
    
      <form id="formulario" onSubmit={handleSubmit}> {/* llamar al onsubmit en el etiqueta form */}
        <Navbar />
        <h2>Registro de Vehiculos</h2>
        <hr />
        <div>
          <label>Modelo</label><br />
          <input  name="nombre" value={nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Marca</label><br />
          <input  name="marca" value={marca} onChange={handleChange} />
        </div>
        <div>
          <label>Precio</label><br />
          <input  type="number" name="precio" value={precio} onChange={handleChange} />
        </div>
        <div>
          <label>Tipo mecanica</label><br />
          <input  name="mecanica" value={mecanica} onChange={handleChange} />
        </div>
        <div>
          <label>Imagen</label><br />
          <input  type="file" name="imagen" value={imagen} onChange={handleFileChanged} /> {/* type file para elegir en local */}
        </div>
        <hr />
        <div>
          <button id="btnEnviar" type='submit'>Enviar</button> {/* type submit en button */}
        </div>
      </form>
    </>
  )
}

export default Registro