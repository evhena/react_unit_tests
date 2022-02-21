import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ProductHeader from '../ProductHeader';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

// describe('ProductHeader Component', () => {
//   it('has an h2 tag', () => {
//     const component = ReactTestUtils.renderIntoDocument(<ProductHeader />);
//     var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h2');
//   });

//   it('is wrapped inside a title class', () => {
//     const component = ReactTestUtils.renderIntoDocument(<ProductHeader />);
//     var node = ReactTestUtils.findRenderedDOMComponentWithClass(
//       component,
//       'title'
//     );
//   });
// });

// describe('ProductHeader Component', () => {
//   it('has an h2 tag', () => {
//     const component = shallow(<ProductHeader />);
//     var node = component.find('h2');
//     expect(node.length).toEqual(1);
//   });

//   it('has a title class', () => {
//     const component = shallow(<ProductHeader />);
//     var node = component.find('h2');
//     expect(node.hasClass('title')).toBeTruthy();
//   });
// });

describe('ProductHeader Component', () => {
  let component, node;

  // Jest beforeEach()
  beforeEach(() => (component = shallow(<ProductHeader />)));
  beforeEach(() => (node = component.find('h2')));

  it('has an h2 tag', () => {
    expect(node).toBeTruthy();
  });

  it('has a title class', () => {
    expect(node.hasClass('title')).toBeTruthy();
  });
});
