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
      <div className="app">
        <main>
          <div>
            <h1>Universal Credit Full Service</h1>
            <p>The new Universal Credit Full Service is rolling out across the U.K.</p>
            <p>It allows claimants to replace <strong>Jobseeker's Allowance, Employment and Support Allowance, Housing benefits, Income Support, Child Tax Credits</strong> and <strong>Working Tax Credits</strong> into a single monthly payment.</p>
            <p>To find out when it will be available, enter a postcode below.</p>
            <PostcodeForm onSubmit={() => {}} />
          </div>
        </main>
        <footer>
          <p>Powered by <a href="https://octopus.energy">Octopus Energy</a> for <a href="https://www.citizensadvice.org.uk/benefits/universal-credit/">Citizens Advice</a></p>
        </footer>
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchResults: PropTypes.object,
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
  searchResults: state.postcodeSearch.result,
  error: state.postcodeSearch.error,
  loading: state.postcodeSearch.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ResultPageStyles, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
