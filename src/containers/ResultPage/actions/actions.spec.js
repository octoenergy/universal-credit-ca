import { fetchRepos } from './actions';
import searchService from '../../../services/search/searchService';
import { actionTypes } from '../SearchConstants';

jest.mock('../../../services/search/searchService');

describe('repo search actions', () => {
  describe('fetchRepos', () => {
    it('should call searchService.repoSearch and dispatch actions', async () => {
      searchService.__setMockReposSearch(Promise.resolve({
        result: 'foo',
      }));
      const dispatch = jest.fn();
      await fetchRepos()(dispatch);
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
      await fetchRepos()(dispatch);
      expect(searchService.repoSearch).toHaveBeenCalled();
      expect(dispatch.mock.calls).toEqual([
        [{ type: actionTypes.REQUEST_START }],
        [{ type: actionTypes.REQUEST_COMPLETE, error: 'Something went wrong' }]
      ]);
    });
  });
});
