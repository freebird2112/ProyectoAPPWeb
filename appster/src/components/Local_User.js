import React from 'react';
import { Card } from 'react-bootstrap';

const Local_User = ({
    id,
    localname,
    direccion, 
    hora_apertura, 
    precio_entrada,
    aforo,
}) => {
  return (
    <Card style={{ width: '18rem' }} className="local">
      <Card.Body>
        <Card.Title className="local-title">{localname}</Card.Title>
        <div className="local-details">
          <div>Direccion: {direccion}</div>
          <div>Hora apertura: {hora_apertura} </div>
          <div>Precio entrada: {precio_entrada} </div>
          <div>Aforo permitido: {aforo} </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Local_User;