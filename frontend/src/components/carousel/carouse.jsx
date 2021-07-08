import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './carousel.css'

class Carousel extends React.Component {
    constructor() {
      super();

      this.state = {
        currActiveIndex: 0
        
      }
      
      this.renderThumbs=this.renderThumbs.bind(this)
      this.renderGallery=this.renderGallery.bind(this)
    }

    slideTo = (i) => this.setState({ currActiveIndex: i })
    

    onSlideChanged = (e) => this.setState({ currActiveIndex: e.item });

    renderThumbs() {
      if (!this.props.photos) {
        return <div> </div>
      } else {
      return (
        <ul className='thumb-bar'>{this.props.photos.map((item, i) => (
          <li className='thumbs' key={i} onClick={() => this.slideTo(i)}><img src={item.s3Link} alt={i}/></li>))}
        </ul>
        )
      }
    }

    renderGallery() {
      const { currActiveIndex } = this.state;
     

      return (
        <AliceCarousel
          disableDotsControls={false}
          disableButtonsControls={false}
          isActiveItem={currActiveIndex}
          onSlideChanged={this.onSlideChanged}
          autoWidth={false}
          autoHeight={false}
        >
          {!this.props.photos
            ? ""
            : this.props.photos.map((photo, i) => (
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