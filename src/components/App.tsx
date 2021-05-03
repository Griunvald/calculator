import React from 'react';
import Button from '../components/Button';
import './App.css';

const App = () => {
  return (
    <div data-test="component-app" className="App">
      <div className="container">
        <div className="display">0</div>
        <div className="body">
          <Button value="1" />
        </div>
      </div>
    </div>
  );
};

export default App;
