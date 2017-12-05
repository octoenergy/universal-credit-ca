import SearchReducer from './ResultPageReducer';
import { actionTypes } from '../ResultPageConstants';

const initialState = {
  result: {},
  error: '',
  loading: false,
};

describe('SearchReducer', () => {
  describe('UPDATE_RESULTS', () => {

    it('should set lad11nm', () => {
      const testResult = {
       'Complex claimants': 'FALSE',
       'High-level': '04/2018',
       Rollout: ' ',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.lad11nm).toEqual('Walsall');
    });

    it('should set pcd7', () => {
      const testResult = {
       'Complex claimants': 'FALSE',
       'High-level': '04/2018',
       Rollout: ' ',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.pcd7).toEqual('WS5 3NU');
    });

    it('should set isComplex to false when Complex claimants FALSE', () => {
      const testResult = {
       'Complex claimants': 'FALSE',
       'High-level': '04/2018',
       Rollout: ' ',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.isComplex).toEqual(false);
    });

    it('should set isComplex to true when Complex claimants TRUE', () => {
      const testResult = {
       'Complex claimants': 'TRUE',
       'High-level': '04/2018',
       Rollout: ' ',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.isComplex).toEqual(true);
    });

    it('should set isLive to true if rollout date blank and high level is in the past', () => {
      const testResult = {
       'Complex claimants': 'TRUE',
       'High-level': '04/2017',
       Rollout: '',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.isLive).toEqual(true);
    });

    it('should set isLive to false if rollout date blank and high level is in the future', () => {
      const testResult = {
       'Complex claimants': 'TRUE',
       'High-level': '04/2030',
       Rollout: '',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.isLive).toEqual(false);
    });

    it('should set isLive to true if rollout date is in the past', () => {
      const testResult = {
       'Complex claimants': 'TRUE',
       'High-level': '04/2017',
       Rollout: '03/04/2017',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.isLive).toEqual(true);
    });

    it('should set isLive to false if rollout date is in the future', () => {
      const testResult = {
       'Complex claimants': 'TRUE',
       'High-level': '04/2050',
       Rollout: '03/04/2050',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.isLive).toEqual(false);
    });

    it('should set go live date', () => {
      const testResult = {
       'Complex claimants': 'TRUE',
       'High-level': '04/2050',
       Rollout: '03/04/2050',
       lad11cd: 'E08000030',
       lad11nm: 'Walsall',
       pcd7: 'WS5 3NU',
       pcd8: 'WS5  3NU',
      };
      const newState = SearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, result: testResult });
      expect(newState.result.goLiveDate).toEqual('03/04/2050');
    });
  });

  describe('REQUEST_COMPLETE', () => {
    it('should update the error and loading props', () => {
      const newState = SearchReducer({ ...initialState, loading: true }, { type: actionTypes.REQUEST_COMPLETE, error: 'foo' });
      expect(newState.error).toEqual('foo');
      expect(newState.loading).toEqual(false);
    });

    it('should clear result on error', () => {
      const newState = SearchReducer({ ...initialState, loading: true }, { type: actionTypes.REQUEST_COMPLETE, error: 'foo' });
      expect(newState.result).toEqual(null);
    });

    it('should not clear result when error empty', () => {
      const newState = SearchReducer({ ...initialState, loading: true }, { type: actionTypes.REQUEST_COMPLETE, error: '' });
      expect(newState.result).toEqual({});
    });
  });
  describe('REQUEST_START', () => {
    it('should update loading', () => {
      const newState = SearchReducer(initialState, { type: actionTypes.REQUEST_START });
      expect(newState.loading).toEqual(true);
    });
  });
});
