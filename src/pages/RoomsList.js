import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Stack, Offcanvas } from 'react-bootstrap';
import { getRooms } from '../redux/rooms/rooms';
import RoomListItem from '../components/RoomListItem';
import lunar from '../images/lunar.png';
import NavPanel from '../components/NavPanel';

const RoomsList = () => {
  const rooms = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <>
      <button type="button" className="p-2 vis btn">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleShow}
          className="text-dark"
        />
      </button>
      <div className="d-flex justify-content-between">
        <div className="nav pt-10">
          <img src={lunar} className="lunar-logo" alt="Premium Hotel Logo" />
          <NavPanel />
        </div>
        <Container className="w-50  align-self-end my-2 p-1">
          <h1 className="text-center fs-2">Available Rooms</h1>
          <Stack gap={3}>
            {Array.isArray(rooms)
              && rooms.map((room) => (
                <RoomListItem name={room.name} key={room.id} id={room.id} />
              ))}
          </Stack>
        </Container>
      </div>
      <Offcanvas className="darkened-off" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={lunar} className="lunar-logo" alt="Premium Hotel Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavPanel className="text-black" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default RoomsList;
