import React from 'react';

import { render } from '@testing-library/react';
import { FaMoneyCheckAlt } from 'react-icons/fa';

import TimelineCard from './TimelineCard';

const renderCard = ({ ...props }) => (
  render(<TimelineCard {...props} />)
);

const cardItem = {
  cardType: 'expense',
  cardDate: new Date(),
  expenseTypeIcon: FaMoneyCheckAlt,
  expenseTypeCode: 'food',
  author: {
    name: 'Name',
  },
  resourceUrl: 'www.google.com',
  currencyCode: 'BRL',
  amountSpent: '100',
  amountTotal: '150',
  status: 'approved',
};

describe('Card behavior', () => {
  it('Renders component on screen', async () => {
    const { getByTestId } = renderCard({ item: cardItem });
    const input = getByTestId('timeline-card');

    expect(input).toBeTruthy();
  });

  it('Card has the correct title', async () => {
    const { getByTestId } = renderCard({ item: cardItem });
    const title = getByTestId('card-title');

    expect(title).toHaveTextContent('Alimentação');
  });

  it('Expense item is shown', async () => {
    const { getByTestId } = renderCard({ item: cardItem });
    const expense = getByTestId('card-expense');

    expect(expense).toHaveTextContent(`${cardItem.currencyCode} ${cardItem.amountSpent}`);
  });

  it('Evaluation item is shown', async () => {
    const { getByTestId } = renderCard({ item: { ...cardItem, cardType: 'evaluation' } });
    const evaluation = getByTestId('card-evaluation');

    expect(evaluation).toHaveTextContent('Ver detalhes');
  });

  it('Status item is shown', async () => {
    const { getByTestId } = renderCard({ item: { ...cardItem, cardType: 'evaluation' } });
    const status = getByTestId('card-status');

    expect(status).toHaveTextContent('Aprovado');
  });

  it('Receipt item is shown', async () => {
    const { getByTestId } = renderCard({ item: { ...cardItem } });
    const receipt = getByTestId('card-receipt');
    const link = getByTestId('card-receipt-link');

    expect(receipt).toHaveTextContent('Ver recibo');
    expect(link).toHaveAttribute('href', 'www.google.com');
  });
});
