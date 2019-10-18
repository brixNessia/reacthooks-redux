import React, { lazy, Suspense } from 'react';
import {
  Router as MainRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import routes from './routes';
import Loader from 'common/Loader/Loader';

const history = createBrowserHistory();

function Router() {
  return (
    <MainRouter history={history}>
      <Switch>
        {routes.map((route, key) => {
          if (route.auth) {
            return <Private exact key={key} {...route} />;
          }
          return <Public exact key={key} {...route} />;
        })}
      </Switch>
    </MainRouter>
  );
}

function Public(props) {
  const { path, component, layout, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));
  const Layout = lazy(() => import(`../layout/${layout}`));

  return (
    <Route
      {...rest}
      render={props => (
        <Suspense fallback={<Loader />}>
          <Layout>
            <Component {...props} />
          </Layout>
        </Suspense>
      )}
    />
  );
}

function Private(props) {
  const auth = useSelector(state => state.auth);
  const { path, component, layout, ...rest } = props;
  const Component = lazy(() => import(`../${component}`));
  const Layout = lazy(() => import(`../layout/${layout}`));

  if (!auth.isAuthenticated) {
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{ pathname: '/sign-in', state: { from: props.location } }}
          />
        )}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Suspense fallback={<Loader />}>
          <Layout>
            <Component {...props} />
          </Layout>
        </Suspense>
      )}
    />
  );
}

Public.propTypes = {
  layout: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

export default Router;
