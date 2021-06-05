import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithSubRoutes from './RouteWithSubRoutes';
import { RouteOption } from './types';

export interface RouterProps {
  routes: RouteOption[];
}

const Router: React.FC<RouterProps> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route: RouteOption) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  );
};

export default Router;
