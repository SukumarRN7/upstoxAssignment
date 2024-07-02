import React from 'react';
import renderer from 'react-test-renderer';
import {Holding} from '../index';

describe('Holding', () => {
  const holdingData = {
    symbol: 'AAPL',
    avgPrice: 150,
    ltp: 160,
    quantity: 10,
  };

  test('renders correctly', () => {
    const component = renderer.create(<Holding holding={holdingData} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
