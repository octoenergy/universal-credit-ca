import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../actions/actions';
import './ResultPageStyles.scss';
import PostcodeForm from '../../../components/PostcodeForm/PostcodeForm';

export class ResultPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchRepos(this.props.params.postcode);
  }

  componentWillUpdate(newProps) {
    const postcode = this.props.params.postcode
    if (postcode !== newProps.params.postcode) {
      this.props.actions.fetchRepos(postcode); 
    }
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
      <div className="app">
        <header>
          <PostcodeForm onSubmit={() => {}} />
        </header>
        <main>
          <div className="result">
            {error && <p>{error}</p>}
            {loading && <div className="loader" />}
            {!loading && <div>
              <h1>{pcd7}</h1>
              <p>Local Authority: {lad11nm}</p>

              Rollout: {Rollout}
              Postcode: {pcd7}
              Complex claimants: {complex}
              High-level: {highLevel}
              lad11nm: {lad11nm}
            </div>}

            <div className="info">
              <h4>Currently</h4>
              <p>Single claimants, couples and families can make a claim online. Claimants must earn less than £338 per month, after tax.</p>
              <p>Visit <a href='https://www.universal-credit.service.gov.uk/'>the Universal Credit website</a> to make a claim.</p>
            </div>
          </div>
        </main>
        <footer>
          <p>Powered by <a href='https://octopus.energy'>Octopus Energy</a> for <a href='https://www.citizensadvice.org.uk/benefits/universal-credit/'>Citizen's Advice</a></p>
        </footer>
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
