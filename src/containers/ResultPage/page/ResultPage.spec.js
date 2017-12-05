import React from 'react';
import { mount } from 'enzyme';
import { ResultPage } from './ResultPage';

describe('<ResultPage />', () => {
  let props = {};
  let repoDataMock = {
    "Complex claimants":"FALSE",
    "High-level":"06/2018",
    Rollout:" ",
    lad11cd:"E07000237",
    lad11nm:"Worcester",
    pcd7:"WR4 9LP",
    pcd8:"WR4  9LP",
  };
  beforeEach(() => {

    props = {
      actions: {
        fetchRepos: jest.fn(),
      },
      searchResults: repoDataMock
    };
  });

  describe('componentWillMount', () => {
    it('should call fetchRepos', () => {
      mount(<ResultPage {...props} />);
      expect(props.actions.fetchRepos).toHaveBeenCalled();
    });
  });

});
