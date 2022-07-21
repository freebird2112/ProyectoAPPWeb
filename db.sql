CREATE DATABASE  db;

CREATE TABLE evento(
    evento_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    hora TIME(0),
    precio INT NOT NULL,
    aforo INT NOT NULL

);