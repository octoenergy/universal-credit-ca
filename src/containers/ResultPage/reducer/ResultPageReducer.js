import { actionTypes } from '../ResultPageConstants';

const initialState = {
  result: {
    'Complex claimants': 'FALSE',
    'High-level': '08/2018',
    Rollout: ' ',
    lad11cd: 'E07000196',
    lad11nm: 'South Staffordshire',
    pcd7: 'WS6 6LT',
    pcd8: 'WS6  6LT',
    isLive: false,
    goLiveDate: 'December 4th, 2017',
    isComplex: true
  },
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      return state;
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
