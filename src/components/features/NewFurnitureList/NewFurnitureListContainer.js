import NewFurnitureList from './NewFurnitureList';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { getMode } from '../../../redux/modeRedux';
import { getNew } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  mode: getMode(state),
});

export default connect(mapStateToProps)(NewFurnitureList);
