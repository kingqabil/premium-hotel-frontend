import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Stack } from 'react-bootstrap';
import { getRooms } from '../redux/rooms/rooms';
import RoomListItem from '../components/RoomListItem';

const RoomsList = () => {
  const rooms = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  return (
    <Container className="my-2 p-1">
      <h1 className="text-center fs-2">Available Rooms</h1>
      <Stack gap={3}>
        {Array.isArray(rooms)
        && rooms.map((room) => (
          <RoomListItem name={room.name} key={room.id} id={room.id} />
        ))}
      </Stack>
    </Container>
  );
};

export default RoomsList;
