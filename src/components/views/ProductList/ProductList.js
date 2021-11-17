import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import FilterByCategories from '../../features/FilterByCategories/FilterByCategories';

const ProductList = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.banner}>
            <span>BANNER</span>
          </div>
        </div>
        <div className='col-9'>
          <div className={styles.productList}>
            <span>Product LIST</span>
          </div>
        </div>
        <div className='col-3'>
          <div className={styles.filters}>
            <FilterByCategories />
          </div>
        </div>
        <div className='col-12'>
          <div className={styles.brands}>
            <span>Brands</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
