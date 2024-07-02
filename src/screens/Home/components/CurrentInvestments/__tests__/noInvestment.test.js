import React from 'react';
import renderer from 'react-test-renderer';
import NoInvestments from '../noInvestments';

describe('NoInvestments', () => {
  test('renders correctly', () => {
    const component = renderer.create(<NoInvestments />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
