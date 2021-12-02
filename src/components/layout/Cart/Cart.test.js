import Cart from './Cart';
import React from 'react';
import { shallow } from 'enzyme';

describe('Cart', () => {
  it('renders without crashing', () => {
    shallow(<Cart />);
  });
});
