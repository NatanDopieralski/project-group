import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faHeart, faExchangeAlt, faEye, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import ReactTooltip from 'react-tooltip';
import initialState from '../../../redux/initialState';
import Slider from 'react-slick';

class Gallery extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'topSeller',
    activeFade: false,
  };

  handleCategoryChange(newCategory) {
    this.setState({
      activeCategory: newCategory,
      activeFade: true,
    });
    if (this.state.activeFade === false) {
      setTimeout(
        function() {
          this.setState({ activeFade: false });
        }.bind(this),
        1000
      );
    }
  }


  render() {
    const { products } = this.props;
    const { activeCategory} = this.state;
    const categories = [
      { id: 'featured', name: 'FEATURED' },
      { id: 'topSeller', name: 'TOP SELLER'},
      { id: 'saleOff', name: 'SALE OFF'},
      { id: 'topRated', name: 'TOP RATED'},
    ];
    const settings = {
      customPaging: function () {
        return (
          <a className={styles.boximage}>
            {/* <img src={`${initialState.products.image}`} alt='' /> */}
            <img src='https://i.ibb.co/p3jjsP6/chairs.jpg' alt='' />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-6 '>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
              {/* Gallery tabs */}
              <div className={styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      {/* eslint-disable-next-line */}
                      <span
                        className={
                          item.id === activeCategory ? styles.active : null }
                        onClick={event => this.handleCategoryChange(event, item.id, categories.catgory)}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/*Left side of the gallery*/}
              <div className={styles.product}>
                <div className={styles.buttons}>
                  <Button data-for='btn' data-tip='Add to favorites' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faHeart}>Add to favorites</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>
                  <Button data-for='btn' data-tip='Add to compare' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>
                  <Button data-for='btn' data-tip='View details' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>
                  <Button data-for='btn' data-tip='Add to basket' variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faShoppingBasket}>Add to basket</FontAwesomeIcon>
                  </Button>
                  <ReactTooltip id='btn' place='right' getContent={(dataTip) => `${dataTip}`}/>
                </div>
                {/*Rating*/}

              </div>
              <div className={styles.slider}>
                <Slider {...settings}>
                  {products.slice(0, 6).map((product, index) => (
                    <div key={product.id}><div className={styles.box}>
                      <img
                        src={product.image}
                        alt=''
                        onClick={() => this.handleProductChange(product)}
                        className={
                          index === 0
                            ? styles.thumbnail + ' ' + styles.active
                            : styles.thumbnail
                        }
                      /></div>
                    <div className={styles.content}>
                      <div className={styles.cornerTopLeft} />
                      <h5>{product.name}</h5>
                      <div className={styles.stars}>
                        <span>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </span>
                      </div>
                      <div className={styles.cornerBottomRight} />
                      <div className={styles.price}>
                        <h3>${product.price}</h3>
                        <h3>
                          <s>${product.oldPrice}</s>
                        </h3>
                      </div>
                    </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            {/*Right side of the gallery*/}
            <div className={'col-6 ' + styles.picture}>
              <img
                src={initialState.products[3].image}
                alt='product-3'
              />
              <div className={styles.details}>
                <h3>
                  from <span>$ {products[3].price}</span>
                </h3>
                <h1>{products[3].name}</h1>
                <Button variant='greenBtn'>SHOP NOW</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.number,
      image: PropTypes.string,
      category: PropTypes.string,
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
Gallery.defaultProps = {
  categories: [],
  products: [],
};

export default Gallery;