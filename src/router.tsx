import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './layout';
import Colors from './colors';
import StartUp from './startup';
import Business from './business';
import Propaganda from './propaganda';
import Comprehensive from './comprehensive';
import Inline from './inline';
import Expand from './expand';
import Top from './top';

export default () => (
  <HashRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/color" element={<Colors />} />
        <Route path="/business" element={<Business />} />
        <Route path="/propaganda" element={<Propaganda />} />
        <Route path="/comprehensive" element={<Comprehensive />} />
        <Route path="/inline" element={<Inline />} />
        <Route path="/expand" element={<Expand />} />
        <Route path="/top" element={<Top />} />
      </Routes>
    </Layout>
  </HashRouter>
);
