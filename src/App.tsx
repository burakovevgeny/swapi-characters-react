import React, { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Main, Favorite } from './modules';
import { Navigation } from './models';

import '@mdi/font/css/materialdesignicons.css';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Navigation.MAIN} element={<Main />} />
        <Route path={Navigation.FAVORITE} element={<Favorite />} />
        <Route path='*' element={<Navigate replace to={Navigation.MAIN} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
