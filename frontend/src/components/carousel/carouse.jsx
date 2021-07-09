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
      this.slideTo = this.slideTo.bind(this)
      this.onSlideChanged = this.onSlideChanged.bind(this)
    }

    slideTo = (i) => this.setState({ currActiveIndex: i })
    

    onSlideChanged(e) {
      this.setState({ currActiveIndex: e.item });
    }
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
      const { photos } = this.props;
      this.mainItems = !photos ? ""
        : photos.map((photo, i) => (
            <div className="photos-tainer">
              <div key={i} className="photos">
                <h2>
                  <img className="photo" src={photo.s3Link} alt={i}/>
                </h2>
              </div>
            </div>
          ))

      return (
        <AliceCarousel
          disableDotsControls={false}
          disableButtonsControls={false}
          activeIndex={currActiveIndex}
          onSlideChanged={this.onSlideChanged}
          autoWidth={false}
          autoHeight={false}
          autoplay={false}
          autoPlayControls={false}
          autoPlayDirection="ltr"
          autoPlayInterval={2000}
          autoPlayStrategy="none"
          infinite={true}
          animationType="slide"
          items={this.mainItems}
        />
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