import { actionTypes } from '../SearchPageConstants';

const initialState = {
  result: {},
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      return { ...state, result: action.result };
    }
    case actionTypes.REQUEST_COMPLETE: {
      return { ...state, error: action.error, loading: false };
    }
    case actionTypes.REQUEST_START: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
