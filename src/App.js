import React from 'react';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import TopBar from './components/appbar';
import DashBoard from './components/dashboard';
import Team from './components/scenes/team';
import Contacts from './components/scenes/contacts';
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
          <BaseRouter>
            <div className="app">
              <SideBarComp />
              <main className="content">
                <TopBar />
              </main>
            </div>
          </BaseRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
