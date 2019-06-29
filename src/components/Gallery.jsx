import React, { Component } from 'react';
import API_KEY from './ApiKey.jsx';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const test2 = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=monroe%2Cmarylin&tag_mode=all&sort=date-posted-desc&per_page=9&content_type=1&format=json&nojsoncallback=1`;

    fetch(test2)
   .then(response => response.json())
   .then(data => this.setState({photos: data.photos.photo}));
  }

  render() {
    return (
      <div className="gallery">
      {
        this.state.photos.length > 0 &&
        this.state.photos.map((photo, index) => {
          return <img
            key={index}
            className="img-thumbnail gallery__image"
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="marylin"/>
        })
      }
      </div>
    );
  }

}

export default Gallery;
