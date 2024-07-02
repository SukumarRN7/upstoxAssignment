import React from 'react';
import renderer from 'react-test-renderer';
import {TitleValue} from '../TitleValue';

describe('TitleValue', () => {
  test('renders correctly', () => {
    const title = 'Title';
    const value = 'Value';
    const component = renderer.create(
      <TitleValue title={title} value={value} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
