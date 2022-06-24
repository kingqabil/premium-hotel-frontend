import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/configureStore';
import { api } from './api/api';
import './index.css';
import App from './App';

api.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    store.dispatch({ type: 'LOGOUT' });
  }
  throw error;
});
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
