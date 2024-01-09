import React, { useState } from 'react';
import './App.css';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }  
  return (
    <div className={`app app_theme_${theme}`}>
      <ThemeToggler theme={theme} onClick={toggleTheme}/>
    </div>
  )
}

export default App;