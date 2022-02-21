import React from 'react';
import ProductList from '../ProductList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('ProductDetails component', () => {
  let component, productData, handleProductClick;

  beforeEach(() => {
    productData = [
      {
        id: 1,
        name: 'NIKE Liteforce Blue Sneakers',
        description: 'Lorem ipsu.',
        status: 'Available',
      },
      // Omitted for brevity
    ];
  });

  beforeEach(() => {
    handleProductClick = jest.fn();
    component = mount(
      <ProductList products={productData} selectProduct={handleProductClick} />
    );
  });

  it('should call selectProduct when clicked', () => {
    const firstLink = component.find('a').first();
    firstLink.simulate('click');
    expect(handleProductClick.mock.calls.length).toEqual(1);
  });
});
