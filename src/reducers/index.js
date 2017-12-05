 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import repoSearch from '../containers/SearchPage/reducer/SearchPageReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   repoSearch,
 });

 export default rootReducer;
