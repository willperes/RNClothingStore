import React from 'react';

import { ThemeProvider } from '@shopify/restyle';

import { darkTheme } from './theme';

import { Routes } from '@/routes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
