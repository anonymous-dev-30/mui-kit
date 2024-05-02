import React from 'react';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import TopBar from './components/appbar';
import DashBoard from './components/dashboard';

function App() {

  const [theme, colorMode] = useMode();

  return (<ErrorBoundary>
    {/* Redux Provider */}
    {/* Authentication layer */}
    {/* Authorization layer */}
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className='content'>
          <TopBar />
          <DashBoard />
        </main>
        {/* BaseRouter  */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  </ErrorBoundary>);
}

export default App;