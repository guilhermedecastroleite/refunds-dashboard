import React from 'react';

import { render } from '@testing-library/react';

import { Datepicker } from './index';

const renderDatepicker = ({ ...props }) => (
  render(<Datepicker {...props} />)
);

describe('Datepicker component behavior', () => {
  it('Renders component on screen', async () => {
    const { getByTestId } = renderDatepicker({});
    const select = getByTestId('datepicker');

    expect(select).toBeTruthy();
  });

  it('Show datepicker error', async () => {
    const { getByTestId } = renderDatepicker({ error: 'Test error' });
    const error = getByTestId('datepicker-error');

    expect(error).toBeTruthy();
  });
});
