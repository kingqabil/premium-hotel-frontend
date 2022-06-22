import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import RoomListItem from '../../components/RoomListItem';
import store from '../../redux/configureStore';

const name = 'Appart 1';
const id = 1;
const RoomListItemProvider = () => (
  <Provider store={store}>
    <RoomListItem name={name} id={id} />
  </Provider>
);

describe('render component', () => {
  it('renders the room picture and button', () => {
    render(<RoomListItemProvider />);
    const roomName = screen.getByText('Appart 1');
    const roomButton = screen.getByText('Delete');
    expect(roomName).toBeInTheDocument();
    expect(roomButton).toBeInTheDocument();
  });
});

describe('Snapshot test', () => {
  it('looks the same as the snapshot', () => {
    const component = renderer.create(<RoomListItemProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
