import React, { useState, MouseEvent } from 'react';
import Button from '../components/Button';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState<string | number>('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [savedValue, setSavedValue] = useState<string | null | number>(null);

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
      if (pending === true) {
        setDisplayValue('' + String(e.currentTarget.textContent));
        setPending(false);
      }
    }
    if (String(e.currentTarget.classList[1]) === 'operator') {
      setOperator(String(e.currentTarget.textContent));
      setPending(true);
      setSavedValue(displayValue);
    }

    if (String(String(e.currentTarget.textContent)) === 'AC') {
      setDisplayValue('0');
      setSavedValue(null);
    }
    if (String(String(e.currentTarget.textContent)) === '=' && savedValue) {
      setDisplayValue((Number(savedValue) + Number(displayValue)).toString());
      setSavedValue(null);
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
            data-test="button-plus"
          />
          <Button onClick={handleOnClick} value="0" className="button zero" />
          <Button onClick={handleOnClick} value="." className="button" />
          <Button
            onClick={handleOnClick}
            value="="
            className="button operator"
            data-test="button-equals"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
