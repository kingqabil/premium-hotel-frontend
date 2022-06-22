import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Home from "../../pages/Home";
import store from "../../redux/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


const rooms = [
    {
        name: "Room",
        picture: "http://picmic/50",
        id: 1
    }
]

const HomeProvider = () => (
  <Provider store={store}>
    <Router>
      <Home rooms={rooms}/>
    </Router>
  </Provider>
);

describe("render component", () => {
  it("renders the login form", () => {
    render(<HomeProvider />);
    const heading = screen.getByText("Premium's rooms");
    const roomName = screen.getByText("Room");
    expect(heading).toBeInTheDocument();
    expect(roomName).toBeInTheDocument();
  });
});

describe("Snapshot test", () => {
  it("looks the same as the snapshot", () => {
    const component = renderer.create(<HomeProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
