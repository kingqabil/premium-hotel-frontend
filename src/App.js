import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Auth, { AuthRoute } from './components/Auth';
import RoomDetails from './components/RoomDetails';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route
        path="/"
        element={(
          <Auth>
            <Home />
          </Auth>
        )}
      />
      <Route
        path="/users/login"
        element={(
          <AuthRoute>
            <LogIn />
          </AuthRoute>
        )}
      />
      <Route
        path="/users/signup"
        element={(
          <AuthRoute>
            <SignUp />
          </AuthRoute>
        )}
      />
      <Route
        path="/room_details"
        element={(
          <Auth>
            <RoomDetails />
          </Auth>

        )}
      />
    </Routes>
  </Router>
);

export default App;
