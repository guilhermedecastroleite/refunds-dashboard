import PropTypes from 'prop-types';
import {
  Box, Divider, Flex, Text,
} from '@chakra-ui/react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Chip from '../../components/Chips';

import theme from '../../theme/theme';

import EarningsAndExpenses from './EarningsAndExpenses';
import Statement from './Statement';

const statuses = (appTheme) => ({
  finished: {
    label: 'Concluído',
    color: appTheme.colors.green6,
  },
});

const SideBar = () => {
  const statusData = 'finished';
  const refundValue = 'BRL 1.147,13';

  const status = statuses(theme)[statusData];

  return (
    <Box
      ml='54px'
      pt='40px'
      minW='393px'
      minH='100vh'
      bg={theme.colors.white}
    >
      <Flex px='37px' flexDirection='column' alignItems='center'>
        {/** Status Chip */}
        <Chip color={status.color} w='100%' borderRadius='6px'>
          <Box py='12px' w='100%' textAlign='center'>
            <Text {...theme.typography.md}>Status</Text>
            <Text {...theme.typography.xlBold}>{status.label}</Text>
          </Box>
        </Chip>

        {/** Refund Value */}
        <Box w='100%' textAlign='center'>
          <Text {...theme.typography.sm} mt='32px' color={theme.colors.gray4}>
            {'Valor a receber'.toUpperCase()}
          </Text>
          <Text {...theme.typography.xlBold} mt='12px' color={theme.colors.blue4}>
            {refundValue}
          </Text>
        </Box>

        <Divider orientation='horizontal' mt='24px' w='200px' h='1px' borderColor={theme.colors.gray1} opacity={1} />

        {/** Earnings and Expenses */}
        <Flex mt='57px' w='319px' alignItems='center' justifyContent='space-between'>
          <EarningsAndExpenses text='Gastou' value='BRL 1.147,13' icon={FaArrowUp} />
          <Divider orientation='vertical' w='1px' h='37px' borderColor={theme.colors.gray1} opacity={1} />
          <EarningsAndExpenses text='Recebeu' value='BRL 00,00' icon={FaArrowDown} />
        </Flex>
      </Flex>

      {/** Statement */}
      <Statement mt='40px' />
    </Box>
  );
};

export default SideBar;
