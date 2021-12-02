import { Link, NavLink } from 'react-router-dom';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './CompanyClaim.module.scss';

const CompanyClaim = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row' id={styles.rowCompanyClaim}>
        <div className='col-6 col-md-4 text-center'>
          <NavLink to='/'>
            <img src='/images/logo.png' alt='Bazar' />
          </NavLink>
        </div>
        <div className={`col text-right ${styles.cart}`}>
          <Link to='/cart' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>0</div>
          </Link>
        </div>
        <div className={`col-12 col-md-4 text-left ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyClaim;
