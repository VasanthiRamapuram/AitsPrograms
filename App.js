// src/App.js
import React from 'react';
import Registration from './Registration';
import './App.css'; // You can create this file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Registration App</h1>
      </header>
      <main>
        <Registration />
      </main>
    </div>
  );
}

export default App;
