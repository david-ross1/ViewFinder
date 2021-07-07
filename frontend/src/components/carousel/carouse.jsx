import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './carousel.css'
import { connect } from 'react-redux';

class Carousel extends React.Component {
    constructor() {
      super();

      this.state = {
        currentIndex: 0
        
      }
      // this.slideTo=this.slideTo.bind(this)
      this.renderThumbs=this.renderThumbs.bind(this)
      this.renderGallery=this.renderGallery.bind(this)
    }

    // slideTo = (i) => this.setState({ currentIndex: i })
    

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    renderThumbs() {
      if (!this.props.photos) {
        return <div> </div>
      } else {
        // debugger
        return (
          <ul className='thumb-bar'>{this.props.photos.map((item, i) => (
            <li className='thumbs' key={i}><img src={item.s3Link} /></li>))}
          </ul>
          )
      }
    }

    renderGallery() {
      const { currentIndex } = this.state;
      const {photos} =this.props

      return (
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          onSlideChanged={this.onSlideChanged}
        >
          {!photos
            ? ""
            : photos.map((photo, i) => (
                <div className="photos-tainer">
                  <div key={i} className="photos">
                    <h2>
                      <img className="photo" src={photo.s3Link} />
                    </h2>
                  </div>
                </div>
              ))}
        </AliceCarousel>
      );
    }

    render() {
      return (
        <div>
            { this.renderThumbs() }
            { this.renderGallery() }
        </div>
      );
    }
}

export default Carousel;