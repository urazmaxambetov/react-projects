import React from 'react';
import './ThemeToggler.scss'

const ThemeToggler = ({theme, onClick}) => {
  const iconClassName = "switch__icon bx " + (theme === 'light' ? 'bxs-sun' : 'bxs-moon');

  return (
    <div className='switch' onClick={onClick}>
      <input className='switch__input' type="checkbox" checked={theme === 'dark'}/>
      <i className={iconClassName}></i>
    </div>
  )
}

export default ThemeToggler;