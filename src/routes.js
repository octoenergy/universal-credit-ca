/* eslint import/no-named-as-default: 0 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import
  SearchPage
 from './containers/SearchPage/page/SearchPage';

import
 RepoResultPage
from './containers/ResultPage/page/ResultPage';



export default (
  <Route path="/">
    <IndexRoute component={SearchPage} />
    <Route component={RepoResultPage} path="/find/:postcode" />
  </Route>
);
