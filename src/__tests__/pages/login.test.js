import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import LogIn from "../../pages/LogIn";
import store from "../../redux/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const LogInProvider = () => (
  <Provider store={store}>
    <Router>
      <LogIn />
    </Router>
  </Provider>
);

describe("render component", () => {
  it("renders the login form", () => {
    render(<LogInProvider />);
    const LogIn = screen.getByText("Log In");
    const SignUp = screen.getByText("Sign Up");
    expect(LogIn).toBeInTheDocument();
    expect(SignUp).toBeInTheDocument();
  });
});

describe("Snapshot test", () => {
  it("looks the same as the snapshot", () => {
    const component = renderer.create(<LogInProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
