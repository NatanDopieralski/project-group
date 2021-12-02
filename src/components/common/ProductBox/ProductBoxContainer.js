import { addProductToCompare, getAll, getCount } from '../../../redux/compareRedux';
import {
  createAction_addFavorites,
  createAction_removeFavorites,
  getAllProducts,
} from '../../../redux/productsRedux';

import ProductBox from './ProductBox';
import { addProductToCart } from '../../../redux/cartRedux';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  compareList: getAll(state),
  compareCount: getCount(state),
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: productId => dispatch(createAction_addFavorites(productId)),
  removeFromFavorites: productId => dispatch(createAction_removeFavorites(productId)),
  addToCompare: payload => dispatch(addProductToCompare(payload)),
  addToCart: payload => dispatch(addProductToCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
