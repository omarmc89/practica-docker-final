import * as React from 'react';

export default function ActionAreaCard( {titulo, autor, anio_creacion, descripcion, imagen} ) {
  return (
    <section className="card">
      <img className="imagen" src={ imagen } alt={ titulo } />
      <div>
        <h3 className="titulo">{ titulo }</h3>
        <h4>{ autor } - { anio_creacion }</h4>
        <p className="des">{ descripcion }</p>
      </div>
    </section>
  );
}