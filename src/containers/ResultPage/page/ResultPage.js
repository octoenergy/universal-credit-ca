import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../actions/actions';
import './ResultPageStyles.scss';
import PostcodeForm from '../../../components/PostcodeForm/PostcodeForm';
import LocationDetails from '../components/LocationDetails/LocationDetails';

export class ResultPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { error, searchResults, loading, actions: { fetchResult }, params: { postcode } } = this.props;
    return (
      <div>
        <header>
          <PostcodeForm onSubmit={() => {}} />
        </header>
        {error && <p>{error}</p>}
        {loading && <div className="loader" />}
        <LocationDetails searchResults={searchResults} fetchResult={fetchResult} postcode={postcode} />
      </div>
    );
  }
}

ResultPage.propTypes = {
  searchResults: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
  params: PropTypes.object.isRequired,
};

ResultPage.defaultProps = {
  error: '',
};

const mapStateToProps = state => ({
  searchResults: state.repoSearch.result,
  error: state.repoSearch.error,
  loading: state.repoSearch.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(SearchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
