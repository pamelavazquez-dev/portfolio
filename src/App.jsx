import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DelayedSuspenseFallback from './components/common/DelayedSuspenseFallback';
import LoadingScreen from './components/common/LoadingScreen';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={(
          <DelayedSuspenseFallback>
            <LoadingScreen />
          </DelayedSuspenseFallback>
        )}
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
