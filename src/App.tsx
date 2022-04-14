import React from 'react';
import './App.css';
import Chessboard from './components/chessboard/Chessboard';


function App() {
  return (
    <div id='wrapper'>
      <div id='chessboard'>
        <Chessboard />
      </div>
    </div>
  );
}

export default App;
