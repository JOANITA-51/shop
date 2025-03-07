import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/styles.css'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './components/contexts/Auth'
import CartProvider from './components/contexts/Cart'
ReactDOM.render(
  <React.StrictMode>

      <AuthProvider>
        <CartProvider>
        <App />
        </CartProvider>
  
  </AuthProvider>

  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
