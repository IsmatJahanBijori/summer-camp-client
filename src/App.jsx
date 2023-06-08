
import React, { useState } from 'react';
import Home from './pages/Home/Home/Home';
import './App.css'
const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`Home ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Home/>
    </div>
  );
};

export default App;