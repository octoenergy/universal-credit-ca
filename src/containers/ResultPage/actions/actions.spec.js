import { fetchResult } from './actions';
import searchService from '../../../services/search/searchService';
import { actionTypes } from '../ResultPageConstants';

jest.mock('../../../services/search/searchService');

describe('repo search actions', () => {
  describe('fetchResult', () => {
    it('should call searchService.repoSearch and dispatch actions', async () => {
      searchService.__setMockReposSearch(Promise.resolve({
        result: 'foo',
      }));
      const dispatch = jest.fn();
      await fetchResult()(dispatch);
      expect(searchService.repoSearch).toHaveBeenCalled();
      expect(dispatch.mock.calls).toEqual([
        [{ type: actionTypes.REQUEST_START }],
        [{ type: actionTypes.UPDATE_RESULTS, result: {"result": "foo"} }],
        [{ type: actionTypes.REQUEST_COMPLETE, error: '' }]
      ]);
    });

    it('should dispatch error action when service throws and exception', async () => {
      searchService.__setMockReposSearch(Promise.reject({
        message: 'Something went wrong',
      }));
      const dispatch = jest.fn();
      await fetchResult()(dispatch);
      expect(searchService.repoSearch).toHaveBeenCalled();
      expect(dispatch.mock.calls).toEqual([
        [{ type: actionTypes.REQUEST_START }],
        [{ type: actionTypes.REQUEST_COMPLETE, error: 'Something went wrong' }]
      ]);
    });
  });
});
