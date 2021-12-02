import ProductCompareBar from '../ProductCompareBar/ProductCompareBarContainer';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './NewFurnitureList.module.scss';
import ProductBoxList from '../../common/ProductBoxList/ProductBoxList';

class NewFurnitureList extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    activeFade: false,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
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
    const { products, mode,  subpage } = this.props;
    const { activeCategory, activePage, activeFade } = this.state;
    let columnNumber;
    let productsPerPage;

    switch (mode) {
      case 'mobile':
        columnNumber = 'row';
        productsPerPage = 1;
        break;
      case 'tablet':
        columnNumber = 'row';
        productsPerPage = 2;
        break;
      case 'desktop':
        columnNumber = 'row';
        productsPerPage = 8;
        break;
      default:
        productsPerPage = 4;
    }

    if (subpage === 'pageShop') {
      columnNumber = 'row';
      productsPerPage = 5;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.row} ${activeFade ? styles.fadeIn : styles.fadeOut}`} >
            {categoryProducts
              .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
              .map(item => (
                <div key={item.id} className={columnNumber}>
                  <ProductBoxList {...item} />
                </div>
              ))}
          </div>
        </div>
        <ProductCompareBar />
      </div>
    );
  }
}

NewFurnitureList.propTypes = {
  subpage: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  mode: PropTypes.string,
};

NewFurnitureList.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurnitureList;
