import searchService from '../../../services/search/searchService';
import { actionTypes } from '../ResultPageConstants';

export const fetchResult = (postcode) => async (dispatch) => {
  let error = '';
  dispatch({
    type: actionTypes.REQUEST_START,
  });
  try {
    const result = await searchService.repoSearch(postcode);
    dispatch({
      type: actionTypes.UPDATE_RESULTS,
      result,
    });
  }
  catch ({ message }) {
    error = message;
  }
  dispatch({
    type: actionTypes.REQUEST_COMPLETE,
    error,
  });
};
