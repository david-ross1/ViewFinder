import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { connect } from 'react-redux';

class Carousel extends React.Component {
    constructor() {
      super();

      this.props.currentIndex = 0
      
    }

    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    renderThumbs = () =>
      <ul>{this.props.photos.map((item, i) =>
        <li key={i} onClick={() => this.slideTo(i)}>Thumb {item}</li>)}
      </ul>;

    renderGallery() {
      const { currentIndex, photos } = this.props;

      return (<AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        slideToIndex={currentIndex}
        onSlideChanged={this.onSlideChanged}
      >
        { items.map((item, i) => <div key={i} className="photos"><h2>{ item }</h2></div>) }
      </AliceCarousel>);
    }

    render() {
      return (
        <div>
          { this.renderThumbs() }
          <button onClick={() => this.slidePrev()}>Prev button</button>
          <button onClick={() => this.slideNext()}>Next button</button>
          { this.renderGallery() }
        </div>
      );
    }
}

export default Carousel;