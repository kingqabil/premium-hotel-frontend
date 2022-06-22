// import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import RoomItem from "../../components/RoomItem";
import store from "../../redux/configureStore";
import { Provider } from "react-redux";

const room = [
  {
    name: "Appart1",
    picture: "https://picsum.photos/200/300",
    id: 1,
  },
];
const RoomItemProvider = () => (
  <Provider store={store}>
    <RoomItem room={{room}} />
  </Provider>
);

describe("render component", () => {
  it("renders the room picture and button", () => {
    render(<RoomItemProvider />);
    expect(render).toBeInTheDocument();
  });
});
