import React from 'react';
import Button from '../components/Button';
import './App.css';

const App = () => {
  return (
    <div data-test="component-app" className="App">
      <div className="container">
        <div className="display">0</div>
        <div className="body">
          <Button value="AC" className="button function" />
          <Button value="±" className="button function" />
          <Button value="%" className="button function" />
          <Button value="÷" className="button operator" />
          <Button value="7" className="button" />
          <Button value="8" className="button" />
          <Button value="9" className="button" />
          <Button value="×" className="button operator" />
          <Button value="4" className="button" />
          <Button value="5" className="button" />
          <Button value="6" className="button" />
          <Button value="—" className="button operator" />
          <Button value="1" className="button" />
          <Button value="2" className="button" />
          <Button value="3" className="button" />
          <Button value="+" className="button operator" />
          <Button value="0" className="button zero" />
          <Button value="." className="button" />
          <Button value="=" className="button operator" />
        </div>
      </div>
    </div>
  );
};

export default App;
