import React from 'react';
import Button from '../components/Button';
import './App.css';

const App = () => {
  return (
    <div data-test="component-app" className="App">
      <div className="container">
        <div className="display">0</div>
        <div className="body">
          <Button value="AC" />
          <Button value="±" />
          <Button value="%" />
          <Button value="÷" />
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="×" />
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="—" />
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" />
          <Button value="0" />
          <Button value="." />
          <Button value="=" />
        </div>
      </div>
    </div>
  );
};

export default App;
