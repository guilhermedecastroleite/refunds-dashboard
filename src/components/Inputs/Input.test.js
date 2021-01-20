import React from 'react';

import { render } from '@testing-library/react';

import { Input } from './index';

const renderInput = ({ ...props }) => (
  render(<Input {...props} />)
);

describe('Input component behavior', () => {
  it('Renders component on screen', async () => {
    const { getByTestId } = renderInput({});
    const input = getByTestId('input');

    expect(input).toBeTruthy();
  });

  it('Show input error', async () => {
    const { getByTestId } = renderInput({ error: 'Test error' });
    const error = getByTestId('input-error');

    expect(error).toBeTruthy();
  });
});
