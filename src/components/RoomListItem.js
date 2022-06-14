import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteRoom } from '../redux/rooms/rooms';
import './roomDetails.css';

const RoomListItem = ({ name, id }) => {
  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteRoom(id));
    setDeleted(true);
  };
  return (
    <div className="d-flex justify-content-between align-items-center py-1 px-3 shadow rounded-3">
      <h3 className="fw-bold">{name}</h3>
      <button
        type="button"
        className={deleted ? 'btn btn-danger disabled' : 'buttonConfig upperClass'}
        onClick={() => handleClick(id)}
      >
        <h3>{deleted ? 'Removed' : 'Delete'}</h3>
      </button>
    </div>
  );
};

RoomListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default RoomListItem;
