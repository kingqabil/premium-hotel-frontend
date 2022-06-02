import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import RoomItem from '../components/RoomItem';
import NavBar from '../components/NavBar';
import { getRooms } from '../redux/rooms/rooms';
import ph from '../images/ph.png';

function Home() {
  const rooms = [1, 2, 3, 4];
  // const rr = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="Container">
        <div className="vis">
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </div>
        <div className="home">
          <div className="nav">
          <img src={ph} className="ph-logo" alt="" />
            <NavBar />
          </div>
          <div className="main">
            <h1>Lunar&apos;s rooms</h1>
            <div className="rooms">
              {rooms.map((e) => (
                <NavLink to="/room" exact="true" key={e}>
                  <RoomItem />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Home;
