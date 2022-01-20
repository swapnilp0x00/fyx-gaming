import { render, screen, queryByAttribute, fireEvent } from '@testing-library/react';
import exp from 'constants';
import React from 'react';

import Control from './Control';

test('renders learn react link', () => {
  const controlTitle = 'Control Title';
  const controlValue = 5;
  render(<Control title={controlTitle} value={controlValue} />);
  const regex1 = new RegExp(controlTitle, 'i');
  const title = screen.getByText(regex1);
  expect(title).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  const controlTitle = 'Control Title';
  const controlValue = 5;
  render(<Control title={controlTitle} value={controlValue} />);
  const regex2 = new RegExp(controlValue.toString(), 'i');
  const value = screen.getByText(regex2);
  expect(value).toBeInTheDocument();
});

test('renders learn react link 3', () => {
  const controlTitle = 'Control Title';
  const controlValue = 5;
  const handler = jest.fn();
  render(<Control title={controlTitle} value={controlValue} handler={handler} />);
  const input = screen.getByLabelText('input');
  fireEvent.change(input, {target: {value: '6'}});
  expect(handler).toHaveBeenCalled();
});
