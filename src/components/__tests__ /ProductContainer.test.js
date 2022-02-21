import React from 'react';
import ProductContainer from '../ProductContainer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, componentDidMountSpy } from 'enzyme';
configure({ adapter: new Adapter() });

describe('ProductDetails component', () => {
  let component, componentDidMountSpy;

  // it('should call componentDidMount once', () => {
  //   componentDidMountSpy = jest.spyOn(
  //     ProductContainer.prototype,
  //     'componentDidMount'
  //   );
  //   component = shallow(<ProductContainer />);
  //   component.instance().forceUpdate();
  //   expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  // });

  it('should populate the state', () => {
    component = shallow(<ProductContainer />);
    expect(component.state().productList.length).toEqual(4);
  });

  it('should have a working method called handleProductClick', () => {
    component = shallow(<ProductContainer />);
    let productData = component.state().productList;
    let firstProduct = productData[0].id;
    component.instance().handleProductClick(firstProduct);
    expect(component.state().selectedProduct).toEqual(productData[0]);
  });
});
