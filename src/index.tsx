import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Colors from './colors';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Colors />} />
      </Routes>
    </Layout>
  </HashRouter>,
);
