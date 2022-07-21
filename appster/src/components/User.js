import React from 'react';
import { NavLink } from 'react-router-dom';

const P1 = () => {
  return (
    <header>
    <h2> Bienvenido Fiestero</h2>
    <div className="links">

     <NavLink to="/list" className="link" activeClassName="active" exact>
          Lista de Locales
      </NavLink>
   </div>
  </header>
  );
};

export default P1;