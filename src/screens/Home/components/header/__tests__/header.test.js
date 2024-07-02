import React from 'react';
import renderer from 'react-test-renderer';
import HomeHeader from '../index';

describe('HomeHeader', () => {
  test('renders with the correct title', () => {
    const title = 'Hello, World!';
    const component = renderer.create(<HomeHeader title={title} />);
    const instance = component.root;
    const textElement = instance.findByType('Text');
    expect(textElement.props.children).toBe(title);
  });

  test('renders with the default title if not provided', () => {
    const component = renderer.create(<HomeHeader />);
    const instance = component.root;
    const textElement = instance.findByType('Text');
    expect(textElement.props.children).toBe('Default Title');
  });
});
