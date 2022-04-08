import { Container } from '@mui/material';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/app/ResponsiveAppBar';

import { routes } from './routes';

function App() {
  return (
    <>
      <ResponsiveAppBar /> 
      <Container sx={{ mt: 1}} maxWidth={false} disableGutters>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(r => (
              <Route path={r.path} element={r.component} key={r.name} />
            ))}
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
