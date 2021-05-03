import React, { useState, MouseEvent } from 'react';
import Button from '../components/Button';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleOnClick = (e: MouseEvent): any => {
    if (
      e.currentTarget.classList[1] !== 'function' &&
      e.currentTarget.classList[1] !== 'operator'
    ) {
      setDisplayValue(String(e.currentTarget.textContent));
    }
    if (
      displayValue !== '0' &&
      e.currentTarget.classList[1] !== 'function' &&
      e.currentTarget.classList[1] !== 'operator'
    ) {
      setDisplayValue(displayValue + String(e.currentTarget.textContent));
    }
  };

  return (
    <div data-test="component-app" className="App">
      <div className="container">
        <div className="display" data-test="display">
          {displayValue}
        </div>
        <div className="body">
          <Button
            onClick={handleOnClick}
            value="AC"
            className="button function"
          />
          <Button
            onClick={handleOnClick}
            value="±"
            className="button function"
          />
          <Button
            onClick={handleOnClick}
            value="%"
            className="button function"
          />
          <Button
            onClick={handleOnClick}
            value="÷"
            className="button operator"
          />
          <Button onClick={handleOnClick} value="7" className="button" />
          <Button onClick={handleOnClick} value="8" className="button" />
          <Button onClick={handleOnClick} value="9" className="button" />
          <Button
            onClick={handleOnClick}
            value="×"
            className="button operator"
          />
          <Button onClick={handleOnClick} value="4" className="button" />
          <Button onClick={handleOnClick} value="5" className="button" />
          <Button onClick={handleOnClick} value="6" className="button" />
          <Button
            onClick={handleOnClick}
            value="—"
            className="button operator"
          />
          <Button
            onClick={handleOnClick}
            value="1"
            className="button"
            data-test="button-1"
          />
          <Button onClick={handleOnClick} value="2" className="button" />
          <Button onClick={handleOnClick} value="3" className="button" />
          <Button
            onClick={handleOnClick}
            value="+"
            className="button operator"
          />
          <Button onClick={handleOnClick} value="0" className="button zero" />
          <Button onClick={handleOnClick} value="." className="button" />
          <Button
            onClick={handleOnClick}
            value="="
            className="button operator"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
