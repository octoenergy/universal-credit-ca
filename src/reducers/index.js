 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import repoSearch from '../containers/ResultPage/reducer/ResultPageReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   repoSearch,
 });

 export default rootReducer;
