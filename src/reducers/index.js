import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import repoSearch from '../containers/ResultPage/reducer/ResultPageReducer';

const rootReducer = combineReducers({
	form: formReducer, // redux-form
	routing: routerReducer,
	repoSearch,
});

export default rootReducer;
