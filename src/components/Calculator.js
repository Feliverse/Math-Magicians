import React from 'react';
import Display from './Display';
import Buttons from './Keypad';


const Calculator = () => (
  <section className="calculator-container">
    <Display />
    <Buttons />
  </section>
);

export default Calculator;
