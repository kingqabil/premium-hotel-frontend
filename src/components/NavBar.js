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
    {
      id: 3,
      path: '/create_room',
      text: 'Create Room',
    },
    {
      id: 4,
      path: '/room_details',
      text: 'Room Details',
    },
  ];

  return (
    <section>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink className="nav-link" to={link.path} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default NavBar;
