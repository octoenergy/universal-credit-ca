import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RepoSearchActions from '../actions/RepoSearchActions';
import './RepoSearchPageStyles.scss';

export class RepoSearchPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchRepos(this.props.params.postcode);
  }

  render() {
    const { error, searchResults, loading } = this.props;
    const {
      Rollout,
      lad11nm,
      pcd7,
     } = searchResults;
    const complex = searchResults["Complex claimants"];
    const highLevel = searchResults["High-level"];
    return (
      <div>
        <h1>Postcode search</h1>
        {error && <p>{error}</p>}
        {loading && <div className="loader" />}
        {!loading && <ul>
          <li>Rollout: {Rollout}</li>
          <li>Postcode: {pcd7}</li>
          <li>Complex claimants: {complex}</li>
          <li>High-level: {highLevel}</li>
          <li>lad11nm: {lad11nm}</li>
        </ul>}
      </div>
    );
  }
}

RepoSearchPage.propTypes = {
  searchResults: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
  params: PropTypes.object.isRequired,
};

RepoSearchPage.defaultProps = {
  error: '',
};

const mapStateToProps = state => ({
  searchResults: state.repoSearch.result,
  error: state.repoSearch.error,
  loading: state.repoSearch.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(RepoSearchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearchPage);
