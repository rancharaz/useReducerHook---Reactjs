import React, { useState, use, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  /* useState example */
  /*   const [checked, setChecked] = useState(false)
    const toggle = () => {
      setChecked((checked) => !checked)
    } */


  /* useReducer example */
  /* the function is used directly in the place of the useState hook */
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false)



  return (
    <div className='container mx-auto justify-center items-center text-center'>
      <div className="mt-5"></div>
      <form>
        <div className="text-2xl">Form</div>
        <label htmlFor="name" className='text-xl'> Name: {checked ? "David Beckham" : "John Brown"}</label>
        {/* useState example */}
        <input type="checkbox" name={checked.toString()} id="" className='checkBox ml-3 relative top-2' onChange={toggle} />
      </form>
    </div>
  );
}

export default App;
