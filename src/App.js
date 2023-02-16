import React from 'react';
import './scss/app.scss';

import Home from './pages/Home';
import Cart from './pages/Cart';
import {Routes, Route,} from 'react-router-dom';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

  /*  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<FullPizza />} />
      <Route path="*" element={<NotFound />} />
    </Routes>*/

  );
}

export default App;
