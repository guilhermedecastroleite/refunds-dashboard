import PropTypes from 'prop-types';
import {
  Box, Divider, Grid, GridItem, Text,
} from '@chakra-ui/react';

import theme from '../../theme/theme';

const ListItem = ({
  type, title, value, color, ...props
}) => (
  <Grid templateColumns='repeat(3, 1fr)' gap='24px' {...props}>
    <GridItem colSpan={2}>
      <Text {...theme.typography.smBold} color={theme.colors.blue4}>
        {type}
      </Text>
      <Text {...theme.typography.xs} mt='4px' fontWeight={300} color={theme.colors.gray3}>
        {title}
      </Text>
    </GridItem>
    <GridItem colSpan={1}>
      <Text {...theme.typography.smBold} color={color || theme.colors.blue4}>
        {value}
      </Text>
    </GridItem>
  </Grid>
);

ListItem.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
};

ListItem.defaultProps = {
  type: '',
  title: '',
  value: '',
  color: '',
};

const Statement = ({ item, ...props }) => (
  <Box {...props}>
    <Text {...theme.typography.mdBold} ml='24px' color={theme.colors.gray9}>
      Extrato
    </Text>

    <Divider orientation='horizontal' mt='11px' w='100%' h='1px' borderColor={theme.colors.gray1} opacity={1} />

    <Box mt='20px' px='24px'>
      <Grid templateColumns='repeat(3, 1fr)' gap='24px'>
        <GridItem colSpan={2}>
          <Text {...theme.typography.xs} color={theme.colors.blue4}>Descrição</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text {...theme.typography.xs} color={theme.colors.blue4}>Valor</Text>
        </GridItem>
      </Grid>

      <Box mt='8px'>
        <ListItem
          type='Despesas declaradas'
          title='Despesas declaradas pelo trooper'
          value={`${item.currency.code} ${item.declared.toLocaleString()}`}

        />
        <ListItem
          mt='16px'
          type='Despesas aprovadas'
          title='Despesas aprovadas pelo financeiro'
          value={`${item.currency.code} ${item.approved.toLocaleString()}`}
        />
        <ListItem
          mt='16px'
          type='Pagamento realizado'
          title='Pagamento realizado pelo financeiro'
          value={`${item.currency.code} ${item.received.toLocaleString()}`}
          color={theme.colors.green7}
        />
      </Box>
    </Box>
  </Box>
);

Statement.propTypes = {
  item: PropTypes.object,
};

Statement.defaultProps = {
  item: {},
};

export default Statement;
