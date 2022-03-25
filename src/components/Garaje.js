import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import "../estilos/garaje.css"
import { url } from '../helpers/url';
import Navbar from '../components/Navbar'

export const Garaje = () => {

  const [autos, setAutos] = useState([])

  const getData = () => {
    axios.get(url)
      .then(response => {
        setAutos(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const deleteData = (index) => {
    axios.delete(url + index)
      .then(response => {
        getData()
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='cardsCont'>
      <Navbar />

      <div className='cardsCont'>
        {
          autos.map((auto, index) => (
            <Card className='carta' key={auto.id} >
              <Card.Img variant="top" src={auto.imagen} />
              <Card.Body>
                <Card.Title>{auto.nombre}</Card.Title>
                <Card.Text>
                  <span>{auto.mecanica}</span>
                  <br /><br />
                  <span>${auto.precio}</span>
                </Card.Text>
                <Button variant="danger"
                  onClick={
                    () => deleteData(auto.id)
                  }
                >Eliminar</Button>
              </Card.Body>
            </Card>
          ))
        }
      </div>

    </div>

  )
}
