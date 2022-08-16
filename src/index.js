import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ModalProvider, MovieProvider } from './contexts';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ErrorBoundary>
    <Provider store={store}>
      <ModalProvider>
        <MovieProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MovieProvider>
      </ModalProvider>
    </Provider>
  </ErrorBoundary>
  // </React.StrictMode>
);
