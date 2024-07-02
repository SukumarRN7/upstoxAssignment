import React from 'react';
import renderer from 'react-test-renderer';
import CurrentInvestments from '../index';

// Mock useCurrentInvestments hook
jest.mock('../../../../../hooks/currentInvestments', () => ({
  useCurrentInvestments: jest.fn(() => ({
    investments: [
      {symbol: 'AAPL', avgPrice: 150, ltp: 160, quantity: 10},
      {symbol: 'GOOGL', avgPrice: 2000, ltp: 2100, quantity: 5},
    ],
    profitLossInfo: {
      PNL: 1000,
      currentValueTotal: 3000,
      investedValueTotal: 2000,
      todayPNL: 500,
    },
    loading: false,
    hasError: false,
    fetchInvestments: jest.fn(),
  })),
}));

describe('CurrentInvestments', () => {
  test('renders correctly with investments', () => {
    const component = renderer.create(<CurrentInvestments />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with loading indicator', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
    jest.spyOn(React, 'useState').mockReturnValueOnce([true, jest.fn()]);
    const component = renderer.create(<CurrentInvestments />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with error view', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
    jest.spyOn(React, 'useState').mockReturnValueOnce([false, jest.fn()]);
    const component = renderer.create(<CurrentInvestments />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders correctly with no investments', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
    jest.spyOn(React, 'useState').mockReturnValueOnce([false, jest.fn()]);
    const component = renderer.create(<CurrentInvestments />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
