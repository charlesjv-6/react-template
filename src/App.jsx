// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './services/theme/theme';
import { GlobalStyles } from './services/theme/global';
import './App.css';

import Index from './pages';

function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Index/>}/>
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
