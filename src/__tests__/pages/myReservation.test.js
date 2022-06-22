import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MyReservations from "../../pages/MyReservations";
import store from "../../redux/configureStore";

const ReservationsProvider = () => (
  <Provider store={store}>
    <Router>
      <MyReservations />
    </Router>
  </Provider>
);

describe("render component", () => {
  it("renders the rooms list form", () => {
    render(<ReservationsProvider />);
    const heading = screen.getByText("My reservations");
    expect(heading).toBeInTheDocument();
  });
});

describe("Snapshot test", () => {
  it("looks the same as the snapshot", () => {
    const component = renderer.create(<ReservationsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
