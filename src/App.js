// src/App.js
import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import './App.scss'

const MainContainer = styled.div`
  margin-top: 60px; /* Adjust this value based on the height of your header */
  padding: 20px;
  background-color: white; /* Set the background color of the page */
  min-height: 100vh;
  border:1px solid red /* Ensure it covers the full viewport height */
`;

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        {/* Other components go here */}
        <p>Welcome to my website!</p>
      </MainContainer>
    </div>
  );
}

export default App;
