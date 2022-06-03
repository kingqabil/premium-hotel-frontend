import React from 'react';
import phfrom from '../images/ph.png';
import NavBar from '../components/NavBar';

function MyReservation() {
  return (
    <div className="home">
      <div className="nav">
        <img src={ph} className="ph-logo" alt="" />
        <NavBar />
      </div>
      <div className="main">
        <h1>My reservations</h1>
        <h2>
          You are able to cancel the reservation before 24 hours of the
          reservation date
        </h2>
      </div>
    </div>
  );
}

export default MyReservation;
