import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RoomsList from '../../pages/RoomsList';
import store from '../../redux/configureStore';

const rooms = [
  {
    name: 'Room',
    picture: 'http://picmic/50',
    id: 1,
  },
];

const RoomsListProvider = () => (
  <Provider store={store}>
    <Router>
      <RoomsList rooms={rooms} />
    </Router>
  </Provider>
);

describe('render component', () => {
  it('renders the rooms list form', () => {
    render(<RoomsListProvider />);
    const heading = screen.getByText('Available Rooms');
    expect(heading).toBeInTheDocument();
  });
});

describe('Snapshot test', () => {
  it('looks the same as the snapshot', () => {
    const component = renderer.create(<RoomsListProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
