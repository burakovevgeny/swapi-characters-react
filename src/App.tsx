import React, { FC } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

import { Favorite, Main } from './modules';
import { Navigation } from './models';

import '@mdi/font/css/materialdesignicons.css';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Navigation.MAIN} element={<Main />} />
      <Route path={Navigation.FAVORITE} element={<Favorite />} />
      <Route path="*" element={<Navigate replace to={Navigation.MAIN} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
