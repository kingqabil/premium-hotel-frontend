import React from 'react';
import phfrom from '../images/ph.png';
import NavBar from '../components/NavBar';

function MyReservation() {
  const reservations = [1, 2, 3, 4, 5];
  return (
    <div className="home">
      <div className="nav">
        <img src={phfrom} className="ph-logo" alt="" />
        <NavBar />
      </div>
      <div className="main">
        <h1>My reservations</h1>
        <h2>
          You are able to cancel the reservation before 24 hours of the
          reservation date
        </h2>
        <div className="reservation">
          {reservations.map((reservation) => (
            <NavLink to="/reserv" exact="true" key={reservation} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyReservation;
