import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Local = ({
    id,
    localname,
    direccion, 
    hora_apertura, 
    precio_entrada,
    aforo,
    handleRemoveLocal
}) => {
    const history = useHistory();
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
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveLocal(id)}>
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Local;