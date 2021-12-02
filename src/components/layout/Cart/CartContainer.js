import { getAll, removeProductFromCart } from '../../../redux/cartRedux';

import Cart from './Cart';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cartProducts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: productId => dispatch(removeProductFromCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
