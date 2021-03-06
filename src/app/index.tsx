/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  useLocation,
} from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { Home } from './containers/Home/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { CandidateDetails } from './containers/CandidateDetails/Loadable';
import { Shortlisted } from './containers/Shortlisted/Loadable';
import { Rejected } from './containers/Rejected/Loadable';
export function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/shortlisted" component={Shortlisted} />
          <Route exact path="/rejected" component={Rejected} />
          <Route path="/candidate/:id" component={CandidateDetails} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}
