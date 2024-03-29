import { lazy } from 'react';
import { RouteOption } from './router/types';

const routes: RouteOption[] = [
  {
    path: '/',
    name: 'Blog',
    component: lazy(() => import('./views/blog')),
    exact: true,
  },
  {
    path: '/issues/:issues',
    component: lazy(() => import('./views/issues')),
    exact: true,
  },
  {
    path: '/tags',
    name: 'Tags',
    component: lazy(() => import('./views/tags')),
    exact: true,
  },
  {
    path: '/project',
    name: 'Projects',
    component: lazy(() => import('./views/project')),
    exact: true,
  },
  {
    path: '/about',
    name: 'About',
    component: lazy(() => import('./views/about')),
    exact: true,
  },
];

export default routes;
