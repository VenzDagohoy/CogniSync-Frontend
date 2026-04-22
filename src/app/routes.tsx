import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { TheIssue } from './pages/TheIssue';
import { PrototypePage } from './pages/PrototypePage';
import { EthicsPage } from './pages/EthicsPage';
import { ConclusionPage } from './pages/ConclusionPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'the-issue', Component: TheIssue },
      { path: 'prototype', Component: PrototypePage },
      { path: 'ethics', Component: EthicsPage },
      { path: 'conclusion', Component: ConclusionPage },
    ],
  },
]);
