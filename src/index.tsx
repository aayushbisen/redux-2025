import React from 'react';
import ReactDOM from 'react-dom/client';
// Provider is a component that makes the store available to children components that are wrapped in it
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      {/* Provider takes the single Redux store in your application as an arg.*/}
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
