import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateRoom from '../../pages/CreateRoom';
import store from '../../redux/configureStore';

const CreateRoomProvider = () => (
  <Provider store={store}>
    <Router>
      <CreateRoom />
    </Router>
  </Provider>
);

describe('render component', () => {
  it('renders the rooms list form', () => {
    render(<CreateRoomProvider />);
    const roomName = screen.getByLabelText(/room name/i);
    const city = screen.getByLabelText(/city/i);
    const roomType = screen.getByLabelText(/Room type/i);
    const submit = screen.getByText(/submit/i);
    expect(roomName).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(roomType).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
});

describe('Snapshot test', () => {
  it('looks the same as the snapshot', () => {
    const component = renderer.create(<CreateRoomProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
