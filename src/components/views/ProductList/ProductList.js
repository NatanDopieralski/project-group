import Brands from '../../layout/Brands/BrandsContainer';
import React, { useState } from 'react';
import FilterByPrice from '../../features/FilterByPrice/FlterByPrice';
import FilterByColor from '../../features/FilterByColor/FilterByColor';
import FilterByCategories from '../../features/FilterByCategories/FilterByCategories';
import FilterBySize from '../../features/FilterBySize/FilterBySize';
import styles from './ProductList.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NewFurnitureList from '../../features/NewFurnitureList/NewFurnitureListContainer';

const ProductList = () => {

  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);

  return (
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
              <div className={styles.displayOptions}>
                <div className={styles.displayType}>
                  <Link
                    to='#'
                    onClick={() => { setShowGrid(true); setShowList(false); }}
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faThLarge} />
                  </Link>
                  <Link
                    to='#'
                    onClick={() => {
                      setShowList(true);
                      setShowGrid(false);
                    }}
                  >
                    <FontAwesomeIcon className={styles.icon} icon={faThList} />
                  </Link>
                </div>
              </div>
              {showGrid && (
                <div className='row grid'>
                  <NewFurniture subpage='pageShop' />
                </div>
              )}
              {showList && (
                <div className='flex-row'>
                  <NewFurnitureList subpage='pageShop' />
                </div>
              )}
            </div>
          </div>
          <div className='col-3'>
            <div className={styles.filters}>
              <span>Filters</span>
              <div className='col-12'>
                <FilterByCategories />
                <FilterByPrice />
                <FilterByColor />
                <FilterBySize />
              </div>
            </div>
          </div>
          <div className='col-12'>
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductList;
