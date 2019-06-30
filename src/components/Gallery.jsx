import React, { Component } from 'react';
import API_KEY from './ApiKey.jsx';
import getPhotos from '../actions/getPhotos.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Gallery extends Component {
  componentDidMount() {
    this.fillUpGallery();
  }

  render() {
    return (
      <div className="gallery">
      {
        this.props.photos.length > 0 &&
        this.props.photos.map((photo, index) => {
          return <img
            key={index}
            className="img-thumbnail gallery__image"
            onClick={() => window.open(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`)}
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="marylin"/>
        })
      }
      </div>
    );
  }
  fillUpGallery() {
    this.props.getPhotos(API_KEY);
  }
}
const mapDispatchToProps = (dispatch, state) => {
    return {
        getPhotos: (apiKey) => {dispatch(getPhotos(apiKey));},
    };
};

const mapStateToProps = (state) => ({
    photos: state.photoReducer.photos,
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Gallery));
