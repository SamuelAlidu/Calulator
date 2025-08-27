import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(input.slice(-1))) {
      return;
    }
    setInput(input + value);
  };

  const calculate = () => {
    if (!input) return; // Do nothing if input is empty

    try {
      const result = evaluate(input);
      if (isFinite(result)) {
        setInput(result.toString());
      } else {
        setInput('Error');
      }
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>
        <button className="clear" onClick={clearInput}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button className="equals" onClick={calculate}>=</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button className="delete" onClick={deleteLast}>DEL</button>
      </div>
      <div className="footer">Alidu Samuel</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;