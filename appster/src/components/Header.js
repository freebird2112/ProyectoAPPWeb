import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Aplicación Appster</h1>
      <hr />
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

export default Header;