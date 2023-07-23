import React from 'react';
import './App.css';

let count = 0;

function Counter() {
  const Click = () => {
    count = count + 1;
    document.querySelector('.counter').textContent = count;
  };

  return (
    <div className="counter" onClick={Click}>
      {count}
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;


