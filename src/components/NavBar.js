import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/reservations',
      text: 'My Reservations',
    },
  ];

  return (
    <section>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                exact="true"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar