import renderer from "react-test-renderer";
import {screen, render} from "@testing-library/react";
import NavPanel from "../../components/NavPanel";
import store from "../../redux/configureStore";
import { Provider } from "react-redux";

const NavPanelProvider = () => (
  <Provider store={store}>
    <NavPanel />
  </Provider>
);

describe('has the nav links', ()=>{
  it('renders the links', ()=>{
    render(<NavPanelProvider />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('My Reservations')).toBeInTheDocument();
    expect(screen.getByText('Create Room')).toBeInTheDocument();
    expect(screen.getByText('Delete Room')).toBeInTheDocument();
    expect(screen.getByText('Reserve Room')).toBeInTheDocument();
  })
})