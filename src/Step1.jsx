import React from 'react';
import './Step1.css';

const Step1 = ({
  handleNext, handlePrev, setDate, setBuyer,
  setProperty, setCity, setCounty, setZipcode, setParcel
}) => {



  return (
    <div className='form-container'>
      <h1>California Residential Purchase Agreement &#40;CAR RPA&#41; Form</h1>
      <label htmlFor='date'>Date prepared:</label>
      <input onChange={(e)=>{setDate(e.target.value)}} type='date' id='date' name='date'></input>
      <label htmlFor='buyer'>This is an offer from &#40;Buyer's name&#41;:</label>
      <input onChange={(e)=>{setBuyer(e.target.value)}} id='buyer' name='buyer'></input>
      <label htmlFor='property'>The Real Property to be acquired is &#40;Address&#41;:</label>
      <input onChange={(e)=>{setProperty(e.target.value)}} id='property' name='property'></input>
      <label htmlFor='city'>situated in &#40;City&#41;:</label>
      <input onChange={(e)=>{setCity(e.target.value)}} id='city' name='city'></input>
      <label htmlFor='county'>&#40;County&#41;:</label>
      <input onChange={(e)=>{setCounty(e.target.value)}} id='county' name='county'></input>
      <label htmlFor='zipcode'>&#40;Zip Code&#41;:</label>
      <input onChange={(e)=>{setZipcode(e.target.value)}} maxLength='5' id='zipcode' name='zipcode'></input>
      <label htmlFor='parcel'>Assesor's Parcel No.:</label>
      <input onChange={(e)=>{setParcel(e.target.value)}} id='parcel' name='parcel'></input>

      <div>

        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;