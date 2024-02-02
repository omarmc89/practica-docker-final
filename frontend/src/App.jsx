import './App.css'
import ActionAreaCard from './components/ActionAreaCard'
import Header from './components/Header'
import { useEffect, useState } from 'react'

function App() {
  const [pinturas, setPinturas] = useState([])

  useEffect(() => {
    fetch('http://localhost:80/pinturas')
      .then(res => res.json())
      .then(data => setPinturas(data))
  }, [])

  return (

    <div className="App">
      <div className="fixed">
        <p>Omar Martin - 2024</p>
      </div>
      <Header />
      <div className="container">
        {
          (pinturas.length > 0) && pinturas.map( ({ _id, titulo, autor, descripcion, anio_creacion, imagen}) =>
          (
            <ActionAreaCard key={_id} titulo={titulo} descripcion={descripcion} imagen={imagen} autor={autor} anio_creacion={anio_creacion}/>
          ))
        } 
      </div>
    </div>
  )
}

export default App
