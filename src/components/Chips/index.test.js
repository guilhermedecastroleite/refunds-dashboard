import React from 'react';

import { render } from '@testing-library/react';

import Chip from './index';

const renderChip = ({ children, ...props }) => (
  render(
    <Chip {...props}>
      {children}
    </Chip>,
  )
);

describe('Chip component behavior', () => {
  it('Renders component on screen', async () => {
    const { getByTestId } = renderChip({});
    const chip = getByTestId('chip');

    expect(chip).toBeTruthy();
  });

  it('Chip has the corret child', async () => {
    const { getByTestId } = renderChip({ children: 'Chip Content' });
    const chip = getByTestId('chip');

    expect(chip).toHaveTextContent('Chip Content');
  });

  it('Chip has the corret colors', async () => {
    const { getByTestId } = renderChip({ color: '#F00000', children: 'Chip Content' });
    const chip = getByTestId('chip');

    expect(chip).toHaveStyle('color: #F00000');
    expect(chip).toHaveStyle('backgroundColor: rgba(240, 0, 0, 0.1)');
  });
});
