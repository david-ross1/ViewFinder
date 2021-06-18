import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { connect } from 'react-redux';

class Carousel extends React.Component {
    constructor() {
      super();

      this.state = {
        currentIndex: 0,
        
      }
      
    }

    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    renderThumbs() {
      if (!this.props.photos) {
        return <div> </div>
      } else {
      return (
        <ul>{this.props.photos.map((item, i) =>
          <li key={i} onClick={() => this.slideTo(i)}>Thumb<img src={item.s3Link} /></li>)}
        </ul>
        )
      }
    }

    renderGallery() {
      const { currentIndex } = this.state;

      return (<AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        slideToIndex={currentIndex}
        onSlideChanged={this.onSlideChanged}
      >
        {!this.props.photos ? "" : this.props.photos.map((item, i) => <div key={i} className="photos"><h2><img src={item.s3Link} /></h2></div>) }
      </AliceCarousel>);
    }

    render() {
      debugger
      return (
        <div>
          { this.renderThumbs() }
          <button onClick={() => this.slidePrev()}>{"<"}</button>
          <button onClick={() => this.slideNext()}>{">"}</button>
          { this.renderGallery() }
        </div>
      );
    }
}

export default Carousel;