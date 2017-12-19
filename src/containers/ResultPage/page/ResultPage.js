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
      <div className="app">
        <header>
          <PostcodeForm onSubmit={() => {}} />
        </header>
        <main>
          <div className="result">
            {error && <p className="error">{error}</p>}
            {loading && <div className="loader" />}
            <LocationDetails searchResults={searchResults} fetchResult={fetchResult} postcode={postcode} />
          </div>
        </main>
        <footer>
          <p>Powered by <a href="https://octopus.energy">Octopus Energy</a> for <a href="https://www.citizensadvice.org.uk/benefits/universal-credit/">Citizens Advice</a></p>
        </footer>
      </div>
    );
  }
}

ResultPage.propTypes = {
  searchResults: PropTypes.object,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
  params: PropTypes.object.isRequired,
};

ResultPage.defaultProps = {
  error: '',
};

const mapStateToProps = state => ({
  searchResults: state.postcodeSearch.result,
  error: state.postcodeSearch.error,
  loading: state.postcodeSearch.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(SearchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
