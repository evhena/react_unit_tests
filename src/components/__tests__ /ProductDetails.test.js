import React from 'react';
import ProductDetails from '../ProductDetails';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
configure({ adapter: new Adapter() });

describe('ProductDetails component', () => {
  let component, product;

  beforeEach(() => {
    product = {
      id: 1,
      name: 'NIKE Liteforce Blue Sneakers',
      description: 'Lorem ipsum.',
      status: 'Available',
    };
  });
  beforeEach(() => {
    component = mount(<ProductDetails product={product} foo={10} />);
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
    expect(component.props().product).toEqual(product);
  });

  it('should display product data when props are passed', () => {
    let title = component.find('.product-title');
    expect(title.text()).toEqual(product.name);

    let description = component.find('.product-description');
    expect(description.text()).toEqual(product.description);
  });

  it('should display an error when props are not passed', () => {
    /* component without props */
    component = mount(<ProductDetails />);

    let node = component.find('.product-error');
    expect(node.text()).toEqual('Sorry. Product doesnt exist');
  });
});
