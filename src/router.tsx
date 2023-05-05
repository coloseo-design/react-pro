import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './layout';
import Colors from './colors';

export default () => {
  <HashRouter>
    <Routes>
      <Layout>
        <Route path="/" element={<Colors />} />
      </Layout>
    </Routes>
  </HashRouter>;
};
