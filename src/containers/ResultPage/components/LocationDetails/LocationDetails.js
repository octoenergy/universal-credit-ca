import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LocationDetails extends Component {

  componentWillMount() {
    if (this.props.postcode) {
      this.props.fetchResult(this.props.postcode);
    }
  }

  componentWillUpdate(newProps) {
    const postcode = this.props.postcode;

    if (postcode !== newProps.postcode) {
        this.props.fetchResult(newProps.postcode);
    }
  }

  render() {
    const { searchResults } = this.props;
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
        <ul>
          <li>Rollout: {Rollout}</li>
          <li>Postcode: {pcd7}</li>
          <li>Complex claimants: {complex}</li>
          <li>High-level: {highLevel}</li>
          <li>lad11nm: {lad11nm}</li>
        </ul>
      </div>
    );
  }
}

LocationDetails.propTypes = {
  searchResults: PropTypes.object.isRequired,
  fetchResult: PropTypes.func.isRequired,
  postcode: PropTypes.string.isRequired,
};

LocationDetails.defaultProps = {
};

export default LocationDetails;
