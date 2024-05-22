import React from 'react';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import TopBar from './components/appbar';
import BaseRouter from './components/router';
import SideBarComp from './components/sidebar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ErrorBoundary>
      {/* Redux Provider */}
      {/* Authentication layer */}
      {/* Authorization layer */}
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBarComp />
            <main className="content">
              <TopBar />
              <BaseRouter></BaseRouter>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
