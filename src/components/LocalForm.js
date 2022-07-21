import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const LocalForm = (props) => {
  const [local, setLocal] = useState(() => {
    return {
    localname: props.local ? props.local.localname : '',
    direccion: props.local ? props.local.direccion : '',
    hora_apertura: props.local ? props.local.hora_apertura : '',
    precio_entrada: props.local ? props.local.precio_entrada : '',
    aforo: props.local ? props.local.aforo : '',
    //capacidad_disponible: props.local ? props.local.capacidad_disponible: ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { localname, direccion, hora_apertura, precio_entrada,aforo } = local;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [localname, direccion, hora_apertura, precio_entrada,aforo];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const local = {
        id: uuidv4(),
        localname,
        direccion, 
        hora_apertura, 
        precio_entrada,
        aforo,
        //capacidad_disponible: aforo()
      };
      props.handleOnSubmit(local);
    } else {
      errorMsg = 'Porfavor introduzca campos faltantes.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'precio_entrada':
        if (value === '' || parseInt(value) === +value) {
          setLocal((prevState) => ({
            ...prevState,
            [name]: value 
          }));
        }
        break;
      case 'aforo':
        if (value === '' || parseInt(value) === +value) {
            setLocal((prevState) => ({
              ...prevState,
              [name]: value
            }));
          }
        break;
      default:
        setLocal((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="localname"
            value={localname}
            placeholder="Introduzca el nombre del establecimiento"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="direccion">
          <Form.Label>Direccion</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="direccion"
            value={direccion}
            placeholder="Introduzca la direccion del establecimiento"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="hora_apertura">
          <Form.Label>Hora Apertura</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="hora_apertura"
            value={hora_apertura}
            placeholder="Introduzca la hora de apertura del establecimiento"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="precio_entrada">
          <Form.Label>Precio entrada</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="precio_entrada"
            value={precio_entrada}
            placeholder="Introduzca el precio de entrada"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="aforo">
          <Form.Label>Aforo Permitido</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="aforo"
            value={aforo}
            placeholder="Introduzca la capacidad de su establecimiento"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Registrar
        </Button>
      </Form>
    </div>
  );
};

export default LocalForm;