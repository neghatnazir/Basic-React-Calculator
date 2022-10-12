import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [inputVal, setInputVal] = useState('');

  const handleClick = (e) => {
    setInputVal(inputVal.concat(e.target.value) );
  }

  const clear = () => {
    setInputVal('')
  }

  const back = () => {
    setInputVal(inputVal.slice(0,inputVal.length-1 ))
  }

  const calculate = (e) => {
    try {
    setInputVal(eval(inputVal).toString())
    }
    catch {
      setInputVal("Error")
    }
  }
  return (
    <div className='maindiv'>
      <div>
       
        <div className='row'>
          <input className='input' type={Text} value={inputVal}  />
        </div>
        <div className='row'>
          <button className='button' onClick={back}>B</button>
          <button className='button' onClick={clear}>C</button>
          <button className='button'>A</button>
          <button className='button' value={'%'} onClick={(e) => {setInputVal(inputVal + e.target.value )}}>%</button>
        </div>
        <div className='row'>
          <button className='button' value={7} onClick={handleClick}>7</button>
          <button className='button' value={8} onClick={handleClick}>8</button>
          <button className='button' value={9} onClick={handleClick}>9</button>
          <button className='button' value={'*'} onClick={handleClick}>*</button>
        </div>
        <div className='row'>
          <button className='button' value={4} onClick={handleClick}>4</button>
          <button className='button' value={5} onClick={handleClick}>5</button>
          <button className='button' value={6} onClick={handleClick}>6</button>
          <button className='button' value={'-'} onClick={handleClick}>-</button>
        </div>
        <div className='row'>
          <button className='button' value={1} onClick={handleClick}> 1</button>
          <button className='button' value={2} onClick={handleClick}>2</button>
          <button className='button' value={3} onClick={handleClick}>3</button>
          <button className='button' value={'+'} onClick={handleClick}>+</button>
        </div>
        <div className='row'>
          <button className='button' value={0} onClick={handleClick}>0</button>
          <button className='button' value={'.'} onClick={handleClick}>.</button>
          <button className='button' value={'='} onClick={calculate}>=</button>
          <button className='button' value={'/'} onClick={handleClick}>/</button>
        </div>
      </div>
    </div>
  )
}

export default App
