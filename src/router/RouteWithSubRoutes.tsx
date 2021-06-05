import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { RouteOption } from './types';

const RouteWithSubRoutes: React.FC<RouteOption> = (routeProps) => {
  return (
    <Suspense fallback={routeProps.fallback || null}>
      <Route
        path={routeProps.path}
        render={(props) =>
          routeProps.component && (
            <routeProps.component {...props} routes={routeProps.routes} />
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
