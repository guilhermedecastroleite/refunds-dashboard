import theme from '../theme/theme';

export const expenses = {
  food: 'Alimentação',
  'hotel-fee': 'Hotel',
};

export const statuses = {
  pending: {
    label: 'Aguardando aprovação',
    color: theme.colors.gray5,
  },
  approved: {
    label: 'Aprovado',
    color: theme.colors.green7,
  },
  rejected: {
    label: 'Reprovado',
    color: theme.colors.red2,
  },
  finished: {
    label: 'Concluído',
    color: theme.colors.green7,
  },
};
