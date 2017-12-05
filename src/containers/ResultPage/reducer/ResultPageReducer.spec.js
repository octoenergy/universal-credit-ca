import SearchReducer from './ResultPageReducer';
import { actionTypes } from '../ResultPageConstants';

const initialState = {
  result: [],
  error: '',
  loading: false,
};

describe('SearchReducer', () => {
  describe('UPDATE_RESULTS', () => {
    it('should update the result', () => {
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: ['foo'] });
      expect(newState.result).toEqual(['foo']);
    });
  });
  describe('REQUEST_COMPLETE', () => {
    it('should update the error and loading props', () => {
      const newState = SearchReducer({ initialState, loading: true }, { type: actionTypes.REQUEST_COMPLETE, error: 'foo' });
      expect(newState.error).toEqual('foo');
      expect(newState.loading).toEqual(false);
    });
  });
  describe('REQUEST_START', () => {
    it('should update loading', () => {
      const newState = SearchReducer(initialState, { type: actionTypes.REQUEST_START });
      expect(newState.loading).toEqual(true);
    });
  });
});
