import SearchPageReducer from './SearchPageReducer';
import { actionTypes } from '../SearchPageConstants';

const initialState = {
  result: [],
  error: '',
  loading: false,
};

describe('SearchPageReducer', () => {
  describe('UPDATE_RESULTS', () => {
    it('should update the result', () => {
      const newState = SearchPageReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: ['foo'] });
      expect(newState.result).toEqual(['foo']);
    });
  });
  describe('REQUEST_COMPLETE', () => {
    it('should update the error and loading props', () => {
      const newState = SearchPageReducer({ initialState, loading: true }, { type: actionTypes.REQUEST_COMPLETE, error: 'foo' });
      expect(newState.error).toEqual('foo');
      expect(newState.loading).toEqual(false);
    });
  });
  describe('REQUEST_START', () => {
    it('should update loading', () => {
      const newState = SearchPageReducer(initialState, { type: actionTypes.REQUEST_START });
      expect(newState.loading).toEqual(true);
    });
  });
});
