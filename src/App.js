import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import TopBar from './components/appbar';

function App() {

  const [theme, colorMode] = useMode();

  return (<>
      {/* Redux Provider */}
        {/* ErrorBoundary */}
          {/* Authentication layer */}
            {/* Authorization layer */}
              <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                    <main className='content'>
                      <TopBar />
                    </main>
                    {/* BaseRouter  */}
                </ThemeProvider>
              </ColorModeContext.Provider>
  </>);
}

export default App;