import React from 'react';
import renderer from 'react-test-renderer';
import {ProfitLoss} from '../profitLoss';

describe('ProfitLoss', () => {
  const infoData = {
    PNL: 1000,
    currentValueTotal: 2000,
    investedValueTotal: 1500,
    todayPNL: 500,
  };

  test('renders correctly', () => {
    const component = renderer.create(<ProfitLoss info={infoData} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
