import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Reservation from '../../components/Reservation';
import store from '../../redux/configureStore';

const reservation = [
  {
    check_in: '2000-01-01',
    check_out: '2000-01-02',
    room_id: 1,
    id: 1,
  },
];
const ReservationProvider = () => (
  <Provider store={store}>
    <Reservation reservation={reservation} />
  </Provider>
);

describe('render component', () => {
  it('renders the reservation details', () => {
    render(<ReservationProvider />);
    const checkIn = screen.getByText('Check-in:');
    const checkOut = screen.getByText('Check-out:');
    expect(checkIn).toBeInTheDocument();
    expect(checkOut).toBeInTheDocument();
  });
});

describe('Snapshot test', () => {
  it('looks the same as the snapshot', () => {
    const component = renderer.create(<ReservationProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
