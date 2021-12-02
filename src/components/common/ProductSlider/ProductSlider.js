import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '../Button/Button';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import PromoCountdownTimer from '../PromoCountdownTimer/PromoCountdownTimer';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import styles from './ProductSlider.module.scss';

class ProductSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerShown: false,
    };
  }

  static propTypes = {
    settings: PropTypes.object,
    promotedProducts: PropTypes.array,
  };

  /* Slider functionality */
  pause = () => {
    this.slider.slickPause();
    if (this.props.settings.autoplay) {
      setTimeout(() => {
        if (this.slider !== null) {
          this.slider.slickPlay();
        }
      }, this.props.settings.pauseTime);
    }
  };

  prev = event => {
    event.preventDefault();
    this.slider.slickPrev();
    this.pause();
  };

  next = event => {
    event.preventDefault();
    this.slider.slickNext();
    this.pause();
  };

  render() {
    const { settings, promotedProducts } = this.props;

    /* Rendering options */
    function chooseSlideContent(product) {
      if (settings.slideContent === 'productBox') {
        return (
          <ProductBox
            {...product}
            isHovered={bool => showOnHover(bool)}
            viewPromoted={true}
          />
        );
      } else if (settings.slideContent === 'productImage') {
        return <img src={product.image} alt='any' />;
      }
    }

    const showOnHover = bool => {
      this.setState({ timerShown: bool });
    };

    const renderOverlay = sliderId => {
      let overlay;
      if (sliderId === 'left') {
        overlay = (
          <div className={styles.topper}>
            <div className={'col-auto ' + styles.hotDeals}>
              <h3>HOT DEALS</h3>
            </div>
            <div className={styles.customdots__bg} />
            <PromoCountdownTimer isShown={this.state.timerShown} />
          </div>
        );
      } else if (sliderId === 'right') {
        overlay = (
          <div className={styles.overlayLeft}>
            <div className={styles.shadowWrapper}></div>
            <div className={styles.shadowTitle}>
              INDOOR <span>FURNITURE</span>
              <div className={styles.shadowSubtitle}>
                SAVE UP TO 50% OF ALL FURNITURE
              </div>
            </div>
            <div className={styles.centerButton}>
              <Button variant='big'>SHOP NOW</Button>
            </div>
            <div className={styles.shadowButtonsWrapper}>
              <div className='row'>
                <div className={styles.buttonLong}>
                  <Button onClick={this.prev} variant='long'>
                    {'<'}
                  </Button>
                </div>
                <div className={styles.buttonLong}>
                  <Button onClick={this.next} variant='long'>
                    {'>'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return overlay;
    };

    if (promotedProducts) {
      return (
        <div onClick={() => this.pause()}>
          {renderOverlay(settings.id)}
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            {promotedProducts.map(product => (
              <div key={product.id}>{chooseSlideContent(product)}</div>
            ))}
          </Slider>
        </div>
      );
    }
  }
}

export default ProductSlider;
