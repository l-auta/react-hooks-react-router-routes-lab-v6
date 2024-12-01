import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar" role='navigation'>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/actors" className={({ isActive }) => (isActive ? 'active' : '')}>
        Actors
      </NavLink>
      <NavLink to="/directors" className={({ isActive }) => (isActive ? 'active' : '')}>
        Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
