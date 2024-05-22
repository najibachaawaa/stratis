// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    font-family: Arial, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
