import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import NavPanel from '../../components/NavPanel';
import store from '../../redux/configureStore';

const NavProvider = () => (
  <Provider store={store}>
    <Router>
      <NavPanel />
    </Router>
  </Provider>
);

describe('render component', () => {
  it('renders the rooms list form', () => {
    render(<NavProvider />);
    expect((screen.getByText(/home/i))).toBeInTheDocument();
    expect((screen.getByText(/my reservations/i))).toBeInTheDocument();
    expect((screen.getByText(/create room/i))).toBeInTheDocument();
    expect((screen.getByText(/delete room/i))).toBeInTheDocument();
    expect((screen.getByText(/reserve room/i))).toBeInTheDocument();
  });
});

describe('Snapshot test', () => {
  it('looks the same as the snapshot', () => {
    const component = renderer.create(<NavProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
