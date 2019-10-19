import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kris Kringle Generator</h1>
      
      <div className="content">
        <form className="box">
          <label>Enter names below:</label>
          <textarea name="input" cols="40" rows="20"></textarea>
          <button>Generate</button>
        </form>
        <form className="box">
          <label>Results:</label>
          <textarea name="output" cols="40" rows="20"></textarea>
        </form>
      </div>
      
    </div>
  );
}

export default App;
