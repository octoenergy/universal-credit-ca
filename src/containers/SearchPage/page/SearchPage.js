import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ResultPageStyles from '../actions/SearchPageActions';
import './SearchPageStyles.scss';

export class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.context.router.push('find/WR65DW');
  }

  render() {

    return (
      <div>
        <h1>Enter a postcode</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" />
          <button type="submit">Go</button>
        </form>
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
