import React from 'react';
import { NavLink } from 'react-router-dom';

const P2 = () => {
  return (
    <header>
      <h2> Bienvenido a la aplicacion Establecimiento</h2>
      <div className="links">
        
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Locales
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Añade un Local
        </NavLink>
      </div>
    </header>
  );
};

export default P2;