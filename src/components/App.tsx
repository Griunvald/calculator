import React, { useState, MouseEvent } from 'react';
import Button from '../components/Button';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState<string | number>('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [savedValue, setSavedValue] = useState<string | null | number>(null);
  const operations = (operator: string) => {
    if (operator === '+') {
      setDisplayValue((Number(savedValue) + Number(displayValue)).toString());
    }
    if (operator === '—') {
      setDisplayValue((Number(savedValue) - Number(displayValue)).toString());
    }
    if (operator === '÷') {
      setDisplayValue((Number(savedValue) / Number(displayValue)).toString());
    }
    if (operator === '×') {
      setDisplayValue((Number(savedValue) * Number(displayValue)).toString());
    }
  };

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

    if (String(e.currentTarget.textContent) === 'AC') {
      setDisplayValue('0');
      setSavedValue(null);
      setPending(false);
      setOperator(null);
    }

    if (String(e.currentTarget.textContent) === '±') {
      setDisplayValue(Number(-displayValue));
    }

    if (String(e.currentTarget.textContent) === '.') {
      setDisplayValue(Number(displayValue));
      if (String(displayValue).indexOf('.') === -1) {
        setDisplayValue(Number(displayValue) + '.');
      }
    }

    if (String(e.currentTarget.textContent) === '%') {
      setDisplayValue((Number(displayValue) / 100).toString());
    }

    if (String(e.currentTarget.textContent) === '=' && savedValue) {
      operations(String(operator));
      setSavedValue(null);
    }
    if (String(displayValue).length === 20) {
      setDisplayValue(Math.fround(Number(displayValue)));
    }
  };

  return (
    <div data-test="component-app" className="App">
      <div className="container">
        <div className="operator-display" data-test="operator-display">
          {operator}
        </div>
        <div className="display" data-test="display">
          {displayValue}
        </div>

        <div className="body">
          <Button
            onClick={handleOnClick}
            value="AC"
            className="button function"
            data-test="button-ac"
          />
          <Button
            onClick={handleOnClick}
            value="±"
            className="button function"
            data-test="plus-minus-button"
          />
          <Button
            onClick={handleOnClick}
            value="%"
            className="button function"
            data-test="percent-button"
          />
          <Button
            onClick={handleOnClick}
            value="÷"
            className="button operator"
            data-test="button-divide"
          />
          <Button onClick={handleOnClick} value="7" className="button" />
          <Button onClick={handleOnClick} value="8" className="button" />
          <Button onClick={handleOnClick} value="9" className="button" />
          <Button
            onClick={handleOnClick}
            value="×"
            className="button operator"
            data-test="button-multiply"
          />
          <Button onClick={handleOnClick} value="4" className="button" />
          <Button onClick={handleOnClick} value="5" className="button" />
          <Button onClick={handleOnClick} value="6" className="button" />
          <Button
            onClick={handleOnClick}
            value="—"
            className="button operator"
            data-test="button-minus"
          />
          <Button
            onClick={handleOnClick}
            value="1"
            className="button"
            data-test="button-1"
          />
          <Button
            onClick={handleOnClick}
            value="2"
            className="button"
            data-test="button-2"
          />
          <Button onClick={handleOnClick} value="3" className="button" />
          <Button
            onClick={handleOnClick}
            value="+"
            className="button operator"
            data-test="button-plus"
          />
          <Button onClick={handleOnClick} value="0" className="button zero" />
          <Button
            onClick={handleOnClick}
            value="."
            className="button"
            data-test="decimal-point-button"
          />
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
