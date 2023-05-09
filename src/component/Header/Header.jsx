import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to={'/'}><li>Home</li></NavLink>
          <NavLink to={'/login'}><li>Log in</li></NavLink>
          <NavLink to={'/signup'}><li>Sign up</li></NavLink>
          <NavLink to={'/'}><li>Home</li></NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;