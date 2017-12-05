import { actionTypes } from '../ResultPageConstants';

const initialState = {
  result: {},
  error: '',
  loading: false,
};

function getDate (date) {
  const splitDate = date.split('/');
  let day = 1;
  let month = '';
  let year = '';
  if (splitDate.length === 3) {
    day = splitDate[0];
    month = splitDate[1];
    year = splitDate[2];
  } else if (splitDate.length === 2) {
    month = splitDate[0];
    year = splitDate[1];
  }
  return Date.parse(parseInt(year), parseInt(month) - 1, parseInt(day));
}

function dateInFuture(date) {
  let isFuture = false;

  const today = Date.parse(new Date());
  const parsedDate = getDate(date);
  if ((parsedDate-today)>0) {
    isFuture = true;
  }
  return isFuture;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      const result = action.result;
      const {
        Rollout,
       } = result;
      const complex = result["Complex claimants"];
      const highLevel = result["High-level"];
      const isLive = !!((!Rollout && !dateInFuture(highLevel)) || (Rollout && !dateInFuture(Rollout)));
      const newResult = {
        isComplex: complex === 'TRUE',
        isLive,
        goLiveDate: Rollout ? Rollout : highLevel,
        pcd7: result.pcd7,
        lad11nm: result.lad11nm
      };
      return { ...state, result: newResult };
    }
    case actionTypes.REQUEST_COMPLETE: {
      return { ...state, error: action.error, loading: false, result: action.error ? null :  state.result };
    }
    case actionTypes.REQUEST_START: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
