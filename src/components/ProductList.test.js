import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

let mockProducts, wrapper, productSelectFn;

beforeEach(() => {
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'Mock Brand A'},
    {id: 2, name: 'Mock Product 2', brand: 'Mock Brand B'},
    {id: 3, name: 'Mock Product 3', brand: 'Mock Brand C'},
  ];
  productSelectFn = jest.fn();
  wrapper = shallow(
    <ProductList
    products={mockProducts}
    onProductSelect={productSelectFn}
    />
  );
});

afterEach(() => {
  productSelectFn.mockReset();
});

it('should render a list of products as an unordered list', () => {
  const mockProducts = [
    {id: 1, name: 'AirMax 90', brand: 'Nike'},
    {id: 2, name: 'Yeezy', brand: 'Adidas'},
    {id: 3, name: 'Classic', brand: 'Reebok'},
  ];
  const wrapper = shallow(<ProductList products={mockProducts} />);
  expect(wrapper.find('li').length).toEqual(mockProducts.length)
})

it('should render an `<li>` element for every product in props.product', () => {
  expect(wrapper.find('li').length).toEqual(mockProducts.length);
})

it('should display the product name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true)
})

it('should display the brand name in each `<li>` element', () => {
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true)
})

it('should call `props.onProductSelect` when an <li> is clicked', () => {
  const firstElement=wrapper.find('li').first()
  expect(productSelectFn.mock.calls.length).toEqual(0);
  firstElement.simulate('click');
  expect(productSelectFn.mock.calls.length).toEqual(1);
  expect(productSelectFn.mock.calls[0][0]).toEqual(mockProducts[0]);
})
