import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import { Form, Button, Offcanvas } from 'react-bootstrap';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { createReservation } from '../redux/reservations/reservations';
import NavPanel from '../components/NavPanel';
import lunar from '../images/lunar.png';
import './addReservation.css';
import { getRooms } from '../redux/rooms/rooms';

const validationSchema = Yup.object().shape({

  check_in: Yup.date()
    .default(() => new Date())
    .required('*Check In date is required'),
  check_out: Yup.date()
    .when('check_in', (checkIn, yup) => checkIn && yup.min(checkIn, 'Check in date cannot be greater than check out date'))
    .required('*Check Out date is required'),
});

const AddReservation = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const rooms = useSelector((state) => state.roomsReducer);

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBack = () => navigate(-1);
  return (
    <div className="form-container1">
      <button type="button" className="p-2 btn">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={handleBack}
          className="text-white point"
        />
      </button>
      <div className="fullScreen">
        <button type="button" className="p-2 vis btn">
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleShow}
            className="text-white"
          />
        </button>
        <div className="txtWrapper">
          <Formik
            initialValues={{
              check_in: '',
              check_out: '',
              room_id: id,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              dispatch(createReservation(values));
              resetForm();
              setSubmitting(false);
              setTimeout(() => {
                navigate('/reservations');
                window.location.reload(true);
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form
                onSubmit={handleSubmit}
                className="mx-auto row row-cols-2 mt-3 d-flex justify-content-center align-items-center"
              >
                <Form.Group controlId="FormCheckIn">
                  <Form.Label>Check In</Form.Label>
                  <Form.Control
                    type="date"
                    name="check_in"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.check_in}
                    className="{touched.check_in && errors.check_in ? 'error' : null} form-radius"
                  />
                  {touched.check_in && errors.check_in ? (
                    <div className="error-message-white">{errors.check_in}</div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="FormCheckIn">
                  <Form.Label>Check Out</Form.Label>
                  <Form.Control
                    type="date"
                    name="check_out"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.check_out}
                    className="{touched.check_out && errors.check_out ? 'error' : null} form-radius"
                  />
                  {touched.check_out && errors.check_out ? (
                    <div className="error-message-white">
                      {errors.check_out}
                    </div>
                  ) : null}
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                  <Form.Label>Room</Form.Label>
                  {id ? (
                    <Form.Select
                      aria-label="Select Room Field"
                      name="room"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.room_id}
                      disabled
                      className="disabled"
                    >
                      {Array.isArray(rooms)
                      && rooms.filter((room) => room.id === id) && rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name}
                        </option>
                      ))}
                    </Form.Select>
                  ) : (

                    <Form.Select
                      aria-label="Select Room Field"
                      name="room"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.room}
                      className={touched.room && errors.room ? 'error' : null}
                    >
                      <option>Select Room</option>
                      {Array.isArray(rooms)
                      && rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name}
                        </option>
                      ))}
                    </Form.Select>
                  ) }
                  {touched.room && errors.room ? (
                    <div className="error-message">{errors.room}</div>
                  ) : null}
                </Form.Group>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="upperCase resBtn"
                >
                  Reserve
                </Button>
              </Form>
            )}
          </Formik>
        </div>
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
    </div>
  );
};

export default AddReservation;
