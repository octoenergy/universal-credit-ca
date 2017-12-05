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
      isComplex,
      isLive,
      goLiveDate
     } = searchResults;
    
    const highLevel = searchResults["High-level"];
    return (
      <div>
        <h1>{pcd7}</h1>
        <p>Local Authority: {lad11nm}</p>

        {isLive ? <div>
          <h2 className="status">The Universal Credit Full Service is <span className='green'>&bull;LIVE</span> in {lad11nm}.</h2>
          <p>Any claimant can make a claim, and claims can be made and line.</p>
          <p>Visit <a href='https://www.universal-credit.service.gov.uk/'>the Universal Credit website</a> to make or manage a claim.</p>
        </div> : <div>
          <h2 className="status">The Universal Credit Full Service is due to go live <span className='green'>{goLiveDate}</span> in {lad11nm}.</h2>
          <p>Once it does, any claimant can make a claim, and claims can be made and managed online.</p>
        </div>}

        {!isComplex && <div className="info">
          <h4>Currently</h4>
          <p>Single claimants, couples and families can make a claim online. Claimants must earn less than £338 per month, after tax.</p>
          <p>Visit <a href='https://www.universal-credit.service.gov.uk/'>the Universal Credit website</a> to make a claim.</p>
        </div> }
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
