import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppRouter from './router/AppRouter';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomCursor />
        <ScrollProgress />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
