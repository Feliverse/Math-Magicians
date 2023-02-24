import React from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.innerText));
  };

  const { total, next } = state;
  const screen = next || total || '0';
  return (
    <section className="calculator-container">
      <div className="calculator-screen">
        <span className="calculator-display">{screen}</span>
      </div>
      <div className="calculator-keypad">
        <button type="button" className="btn" onClick={handleClick}>AC</button>
        <button type="button" className="btn" onClick={handleClick}>+/-</button>
        <button type="button" className="btn" onClick={handleClick}>%</button>
        <button type="button" className="btn orange" onClick={handleClick}>÷</button>
        <button type="button" className="btn" onClick={handleClick}>7</button>
        <button type="button" className="btn" onClick={handleClick}>8</button>
        <button type="button" className="btn" onClick={handleClick}>9</button>
        <button type="button" className="btn orange" onClick={handleClick}>x</button>
        <button type="button" className="btn" onClick={handleClick}>4</button>
        <button type="button" className="btn" onClick={handleClick}>5</button>
        <button type="button" className="btn" onClick={handleClick}>6</button>
        <button type="button" className="btn orange" onClick={handleClick}>-</button>
        <button type="button" className="btn" onClick={handleClick}>1</button>
        <button type="button" className="btn" onClick={handleClick}>2</button>
        <button type="button" className="btn" onClick={handleClick}>3</button>
        <button type="button" className="btn orange" onClick={handleClick}>+</button>
        <button type="button" className="btn double" onClick={handleClick}>0</button>
        <button type="button" className="btn" onClick={handleClick}>.</button>
        <button type="button" className="btn orange" onClick={handleClick}>=</button>
      </div>
    </section>
  );
};

export default Calculator;
