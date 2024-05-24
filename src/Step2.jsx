import React from 'react';
import './Step2.css';

const Step2 = ({ setPriceWords, setPriceNum, handleNext, handlePrev }) => {





  return (
    <div className='form-container'>
      <h1>California Residential Purchase Agreement &#40;CAR RPA&#41; Form</h1>
      <label htmlFor='priceWords'>The Purchase Price offered is &#40;in words, e.g. One Hundred Thousand Dollars&#41;:</label>
      <input onChange={(e)=>{setPriceWords(e.target.value)}} id='priceWords' name='price'></input>
      <label htmlFor='priceNum'>Numerical amount &#40;USD&#41;:</label>
      <input onChange={(e)=>{setPriceNum(e.target.value)}} type='number' id='priceNum' name='priceNum'></input>
      <label>Close of Escrow shall occur:</label>
      <div className='escrow-options'>
        <input type='radio' name='escrow'></input>
        <label htmlFor='escrow'>on:
          <input type='date'></input>
        </label>
        <input type='radio' name='escrow'></input>
        <label htmlFor='escrow'>or:
          <input type='number' min='0'></input>
          <span> days after acceptance.</span>
        </label>
      </div>

      <div>
        <button onClick={handlePrev} >
          Previous
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;