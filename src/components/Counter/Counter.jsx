import React, { useState } from 'react';
import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1 className="counter__title">{count}</h1>
      <div className="counter__btns">
        <button className='btn btn_color_blue' onClick={increment}>Добавить</button>
        <button className="btn btn_color_red" onClick={decrement}>Отнять</button>
      </div>
    </div>
  )
}

export default Counter;