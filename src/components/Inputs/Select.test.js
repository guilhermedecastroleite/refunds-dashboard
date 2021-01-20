import React from 'react';

import { render } from '@testing-library/react';

import { Select } from './index';

const renderSelect = ({ ...props }) => (
  render(<Select {...props} />)
);

describe('Select component behavior', () => {
  it('Renders component on screen', async () => {
    const { getByTestId } = renderSelect({});
    const select = getByTestId('input');

    expect(select).toBeTruthy();
  });

  it('Show select error', async () => {
    const { getByTestId } = renderSelect({ error: 'Test error' });
    const error = getByTestId('input-error');

    expect(error).toBeTruthy();
  });
});
