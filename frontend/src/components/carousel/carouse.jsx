import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './carousel.css'

class Carousel extends React.Component {
    constructor() {
      super();

      this.state = {
        currentIndex: 0,
        
      }
      this.slideTo=this.slideTo.bind(this)
      
    }

    slideTo(i) {
      this.setState({ currentIndex: i })
    } 

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

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
      const { currentIndex } = this.state;
      return (
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={false}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          autoWidth={false}
          autoHeight={false}
        >
          {!this.props.photos
            ? ""
            : this.props.photos.map((item, idx) => (
                <div className="photos-tainer">
                  <div key={idx} className="photos">
                    <h2>
                      <img className="photo" src={item.s3Link} alt={idx}/>
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