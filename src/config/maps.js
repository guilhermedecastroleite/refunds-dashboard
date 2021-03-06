import theme from '../theme/theme';

export const currencies = {
  brl: 'BRL',
  usd: 'USD',
  mxn: 'MXN',
};

export const expenses = {
  food: 'Alimentação',
  'hotel-fee': 'Hotel',
  transport: 'Transporte',
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

// Ideally all possible statuses should be listed for translation
export const requestStatuses = {
  finished: {
    label: 'Concluído',
    color: theme.colors.green6,
  },
  open: {
    label: 'Aguardando financeiro',
    color: theme.colors.blue4,
  },
};
