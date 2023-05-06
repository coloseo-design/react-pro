import React from 'react';
import { createRoot } from 'react-dom/client';
import RouterPage from './router';
import 'highlight-for-react/lib/highlight/styles/atom-one-light.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <RouterPage />,
);
