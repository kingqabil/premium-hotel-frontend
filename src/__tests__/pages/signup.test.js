import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../../pages/SignUp';
import store from '../../redux/configureStore';

const SignUpProvider = () => (
  <Provider store={store}>
    <Router>
      <SignUp />
    </Router>
  </Provider>
);

describe('render component', () => {
  it('renders the login form', () => {
    render(<SignUpProvider />);
    const LogIn = screen.getByText('Log In');
    const SignUp = screen.getByText('Sign Up');
    expect(LogIn).toBeInTheDocument();
    expect(SignUp).toBeInTheDocument();
  });
});

describe('Snapshot test', () => {
  it('looks the same as the snapshot', () => {
    const component = renderer.create(<SignUpProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
