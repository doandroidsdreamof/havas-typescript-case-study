import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// ? redux-toolkit //
import { store } from './store/store';
import { Provider } from 'react-redux';
// ? react-router-dom //
import { BrowserRouter } from 'react-router-dom';

//? context-api //
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
