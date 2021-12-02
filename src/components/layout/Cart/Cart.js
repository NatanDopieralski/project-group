/* eslint-disable no-console */

import {
  faGreaterThan,
  faHome,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import styles from './Cart.module.scss';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25rem 0.75rem;
  text-decoration: none;
  font-family: monospace;
`;

const Cart = ({ cartProducts, removeFromCart }) => {
  function generateCartPositions() {
    return cartProducts.map(cartProduct => (
      <tr key={cartProduct.id}>
        <td className='align-middle'>
          <button onClick={() => removeFromCart(cartProduct.id)}>
            <FontAwesomeIcon className={styles.icon} icon={faTimesCircle} />
          </button>
        </td>
        <td>
          <div style={{ width: '60px', height: '60px' }}>
            <img src={cartProduct.image} />
          </div>
        </td>
        <td>{cartProduct.name}</td>
        <td className={styles.priceTag}>{`$ ${cartProduct.price}`}</td>
        <td>
          <div>
            <Button onClick={() => console.log('clicked')}>-</Button>
            <span className={styles.quantity}>0</span>
            <Button>+</Button>
          </div>
        </td>
        <td className={styles.priceTag}>{`$ ${cartProduct.price}`}</td>
      </tr>
    ));
  }

  function clearCart() {
    for (let product of cartProducts) {
      removeFromCart(product.id);
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.containerWrapper}>
        <div className='container'>
          <div className={`row ${styles.row}`}>
            <p>The Template</p>
          </div>
        </div>
      </div>
      <div className={styles.containerWrapper}>
        <div className='container'>
          <div className={`row ${styles.row} ${styles.rowsecond}`}>
            <p>Cart</p>
            <span>
              <a href='/'>
                <FontAwesomeIcon className={styles.homeIcon} icon={faHome} />
              </a>
              <FontAwesomeIcon
                className={styles.greaterThanIcon}
                icon={faGreaterThan}
              />
              Cart
            </span>
          </div>
        </div>
      </div>
      <div className={styles.containerWrapper}>
        <div className='container' align='center'>
          <div className='row justify-content-center'>
            <div className='col-12 '>
              <table className='table'>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.length > 0
                    ? generateCartPositions()
                    : 'Your cart is empty'}
                </tbody>
              </table>
              <div className={styles.formSummary}>
                <input
                  onChange={event => {
                    console.log(event);
                  }}
                  className={styles.inputs}
                  type='text'
                  name='firstname'
                  placeholder='Your name..'
                />
                <button
                  onClick={() => {
                    console.log('Apply Coupon');
                  }}
                  className={styles.orangeButton}
                >
                  Apply Coupon
                </button>
                <button
                  onClick={() => {
                    console.log('Update Cart');
                  }}
                  className={styles.updateCart + ' ' + styles.orangeButton}
                >
                  Update Cart
                </button>
              </div>
            </div>
          </div>
          <div className='row justify-content-end'>
            <div className='col-6 '>
              <table className='table table-bordered my-3'>
                <thead className='thead-light'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'>Cart Totals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`border-right ${styles.rowHead}`}>Subtotal</td>
                    <td className={styles.priceTag}>$ 5.00</td>
                  </tr>
                  <tr>
                    <td className={`border-right ${styles.rowHead}`}>Total</td>
                    <td className={styles.priceTag}>$ 5.00</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <a href='/'>
                        <button
                          onClick={() => {
                            clearCart();
                          }}
                          className={styles.orangeButton + ' ' + styles.proceedButton}
                        >
                          Proceed to Checkout
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartProducts: PropTypes.array,
  removeFromCart: PropTypes.func,
};

Cart.defaultProps = {
  cartProducts: [],
};

export default Cart;
