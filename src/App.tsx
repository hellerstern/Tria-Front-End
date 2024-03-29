import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate, Link } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { AppThemeProvider } from './Provider';
import { Layout } from './layouts/layout';

import { Home } from './pages/home';
import { UserBoard } from './pages/userBoard';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <AppThemeProvider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Home />} />
              <Route path={PUBLIC_ROUTES.home} element={<Home />} />
              <Route path={PUBLIC_ROUTES.userBoard} element={<UserBoard />} />
            </Routes>
          </Layout>
        </AppThemeProvider>
      </Router>
    </Suspense>
  );
}

export default App;
