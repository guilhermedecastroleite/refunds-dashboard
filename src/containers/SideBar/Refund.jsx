import PropTypes from 'prop-types';
import {
  Box, Divider, Flex, Text,
} from '@chakra-ui/react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import theme from '../../theme/theme';

import EarningsAndExpenses from './EarningsAndExpenses';

const Refund = ({ item }) => (
  <>
    <Box w='100%' textAlign='center'>
      <Text {...theme.typography.sm} mt='32px' color={theme.colors.gray4}>
        {'Valor a receber'.toUpperCase()}
      </Text>
      <Text {...theme.typography.xlBold} mt='12px' color={theme.colors.blue4}>
        {item.balance ? `${item.currency.code} ${item.balance.toLocaleString()}` : '-'}
      </Text>
    </Box>

    <Divider orientation='horizontal' mt='24px' w='200px' h='1px' borderColor={theme.colors.gray1} opacity={1} />

    {/** Earnings and Expenses */}
    <Flex
      mt={['16px', '16px', '57px']}
      w={['fit-content', 'fit-content', '319px']}
      alignItems={['flex-start', 'flex-start', 'center']}
      justifyContent='space-between'
      flexDirection={['column', 'column', 'row']}
    >
      <EarningsAndExpenses text='Gastou' value={`${item.currency.code} ${item.declared.toLocaleString()}`} icon={FaArrowUp} />
      <Divider
        orientation='vertical'
        w='1px'
        h='37px'
        borderColor={theme.colors.gray1}
        opacity={1}
        display={['none', 'none', 'initial']}
      />
      <EarningsAndExpenses text='Recebeu' value={`${item.currency.code} ${item.received.toLocaleString()}`} icon={FaArrowDown} />
    </Flex>
  </>
);

Refund.propTypes = {
  item: PropTypes.object,
};

Refund.defaultProps = {
  item: {},
};

export default Refund;
