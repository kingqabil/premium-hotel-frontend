import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AddReservation from '../../pages/AddReservation';
import store from '../../redux/configureStore';

const AddReservationProvider = () => (
  <Provider store={store}>
    <Router>
      <AddReservation />
    </Router>
  </Provider>
);

describe('render component', () => {
  it('renders the rooms list form', () => {
    render(<AddReservationProvider />);
    expect(screen.getByLabelText(/check in/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/check out/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/room/i)).toBeInTheDocument();
    expect(screen.getByText(/reserve/i)).toBeInTheDocument();
  });
});

describe('Snapshot test', () => {
  it('looks the same as the snapshot', () => {
    const component = renderer.create(<AddReservationProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
