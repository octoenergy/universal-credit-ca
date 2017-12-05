import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResultPageStyles from '../actions/SearchPageActions';
import './SearchPageStyles.scss';
import PostcodeForm from '../../../components/PostcodeForm/PostcodeForm';

export class SearchPage extends Component {

  render() {

    return (
      <div>
        <h1>Universal Credit Full Service</h1>
        <p>The new Universal Credit Full Service is rolling out across the U.K.</p>
        <p>It allows claimants to replace <strong>Jobseeker's Allowance, Employment and Support Allowance, Housing benefits, Income Support, Child Tax Credits</strong> and <strong>Working Tax Credits</strong> into a single monthly payment.</p>
        <p>To find out when it will be available, enter a postcode below.</p>

        <PostcodeForm onSubmit={() => {}} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchResults: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

SearchPage.defaultProps = {
  error: '',
};

SearchPage.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.repoSearch.result,
  error: state.repoSearch.error,
  loading: state.repoSearch.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ResultPageStyles, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
