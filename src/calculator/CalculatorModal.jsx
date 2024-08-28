import React, { useState } from 'react';
import './CalculatorModal.css'; 

function CalculatorModal({ onClose }) {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(prev => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator-modal">
      <div className="calculator-modal-content">
        <button className="calculator-modal-close" onClick={onClose}>X</button>
        <div className="calculator-body">
          <h2>Calculator</h2>
          <input className='calculator-input' type="text" value={input} readOnly />
          <div className="button-grid">
            <button className='calculator-button' onClick={() => handleButtonClick('1')}>1</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('2')}>2</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('3')}>3</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('+')}>+</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('4')}>4</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('5')}>5</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('6')}>6</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('-')}>-</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('7')}>7</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('8')}>8</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('9')}>9</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('*')}>*</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('0')}>0</button>
            <button className='calculator-button'  onClick={handleClear}>C</button>
            <button className='calculator-button'  onClick={handleCalculate}>=</button>
            <button className='calculator-button'  onClick={() => handleButtonClick('/')}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorModal;
