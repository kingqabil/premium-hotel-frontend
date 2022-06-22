import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MyReservations from "../../pages/MyReservations";
import store from "../../redux/configureStore";

const reservation = [
  {
    check_in: "2000-01-01",
    check_out: "2000-01-02",
    room_id: 1,
    id: 1,
  },
];

const ReservationsProvider = () => (
  <Provider store={store}>
    <Router>
      <MyReservations reservation={reservation} />
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
