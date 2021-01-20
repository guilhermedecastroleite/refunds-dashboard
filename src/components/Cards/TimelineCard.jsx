import PropTypes from 'prop-types';
import {
  Box, Flex, Icon, Text,
} from '@chakra-ui/react';
import {
  FaAsterisk, FaConciergeBell, FaUtensils, FaUsers, FaReceipt, FaMoneyCheckAlt, FaChevronDown, FaBus,
} from 'react-icons/fa';
import { format } from 'date-fns';

import Chip from '../Chips';

import theme from '../../theme/theme';
import { expenses, statuses } from '../../config/maps';

const expenseIcons = {
  'concierge-bell': FaConciergeBell,
  utensils: FaUtensils,
  'money-check-alt': FaMoneyCheckAlt,
  bus: FaBus,
};

const types = ({
  code, icon, user,
}) => ({
  expense: {
    icon: expenseIcons[icon],
    backgroundColor: theme.colors.blue1,
    iconColor: theme.colors.blue3,
    text: expenses[code],
  },
  evaluation: {
    icon: FaUsers,
    backgroundColor: theme.colors.gray1,
    iconColor: theme.colors.gray5,
    text: `Aprovação da solicitação ${user}`,
  },
  accountability_submitted: {
    icon: FaAsterisk,
    backgroundColor: theme.colors.green1,
    iconColor: theme.colors.green7,
    text: `Despesas enviadas para aprovação por ${user}`,
  },
  accountability_created: {
    icon: FaAsterisk,
    backgroundColor: theme.colors.green1,
    iconColor: theme.colors.green7,
    text: `Pedido de reembolso criado por ${user}`,
  },
});

const TimelineCard = ({ item, ...props }) => {
  const type = item.cardType.toLowerCase();
  const isExpense = type === 'expense'.toLowerCase();
  const isEvaluation = type === 'evaluation'.toLowerCase();

  const icon = (item || {}).expenseTypeIcon;
  const code = (item || {}).expenseTypeCode;
  const user = !isExpense ? (item || {}).author.name : '';
  const receipt = isExpense ? (item || {}).resourceUrl : '';

  const currentItem = types({
    icon, code, user,
  });

  return (
    <Flex
      data-testid='timeline-card'
      py='24px'
      px={['16px', '16px', '24px', '24px', '48px']}
      bg={theme.colors.white}
      borderRadius='6px'
      boxShadow='md'
      alignItems='center'
      justifyContent='space-between'
      flexDirection={['column', 'column', 'row']}
      position='relative'
      {...props}
    >
      <Flex
        alignItems='center'
        justifyContent='center'
        flexDirection={['column', 'column', 'row']}
      >
        {/** Icon and Date */}
        <Flex flexDirection='column' alignItems='center'>
          <Flex
            w='59px'
            h='59px'
            justifyContent='center'
            alignItems='center'
            bg={currentItem[type].backgroundColor}
            borderRadius='50%'
          >
            <Icon data-testid='card-icon' fontSize='20px' as={currentItem[type].icon} color={currentItem[type].iconColor} />
          </Flex>
          <Text data-testid='card-date' mt='10px' {...theme.typography.sm}>{format(new Date(item.cardDate), 'dd/MM/yyyy')}</Text>
        </Flex>

        {/** Category and Title */}
        <Box mt={['24px', '24px', 0]} ml={[0, 0, '40px', '56px', '64px', '112px']} textAlign={['center', 'center', 'left']}>
          <Text data-testid='card-category' {...theme.typography.xsBold} color={theme.colors.gray2}>
            {'Ação'.toUpperCase()}
          </Text>
          <Text data-testid='card-title' mt='3px' {...theme.typography.lgBold} color={theme.colors.gray6}>
            {currentItem[type].text}
          </Text>
        </Box>

        {/** Value */}
        {isExpense && (
          <Box data-testid='card-expense' mt={['24px', '24px', 0]} ml={[0, 0, '40px', '56px', '64px', '123px']} textAlign={['center', 'center', 'left']}>
            <Text {...theme.typography.xsBold} color={theme.colors.gray2}>
              {'Valor'.toUpperCase()}
            </Text>
            <Text mt='3px' {...theme.typography.lgBold} color={theme.colors.gray6}>
              {`${item.currencyCode} ${item.amountSpent}`}
            </Text>
            <Text {...theme.typography.md} color={theme.colors.gray6}>
              {`Valor da nota: ${item.currencyCode} ${item.amountTotal}`}
            </Text>
          </Box>
        )}

        {/** Aprovals */}
        {isEvaluation && (
          <Box data-testid='card-evaluation' mt={['24px', '24px', 0]} ml={[0, 0, '40px', '56px', '64px', '120px']}>
            <Text {...theme.typography.xsBold} color={theme.colors.gray2}>
              {'Aprovações'.toUpperCase()}
            </Text>
            <Flex mt='3px' alignItems='center' cursor='pointer'>
              <Text {...theme.typography.mdBold} color={theme.colors.green4}>
                Ver detalhes
              </Text>
              <Icon
                ml='4px'
                as={FaChevronDown}
                {...theme.typography.mdBold}
                color={theme.colors.green4}
              />
            </Flex>
          </Box>
        )}

        {/** Status */}
        {item.status && (
          <Box data-testid='card-status' mt={['24px', '24px', 0]} ml={[0, 0, '40px', '56px', '64px', '128px']} textAlign={['center', 'center', 'left']}>
            <Text {...theme.typography.xsBold} color={theme.colors.gray2}>
              {'Status'.toUpperCase()}
            </Text>
            <Chip mt='3px' color={(statuses || {})[item.status.toLowerCase()].color}>
              <Text {...theme.typography.xsBold}>
                {(statuses || {})[item.status.toLowerCase()].label}
              </Text>
            </Chip>
            <Text mt='7px' {...theme.typography.xs} color={theme.colors.gray11}>
              {item.notes}
            </Text>
          </Box>
        )}
      </Flex>

      {/** Receipt */}
      {receipt && (
        <Box data-testid='card-receipt' mt={['24px', '24px', 0]} ml={[0, 0, '16px', '16px', '48px', '24px']}>
          <Flex mt='3px' alignItems='center' cursor='pointer'>
            <Icon
              as={FaReceipt}
              {...theme.typography.mdBold}
              color={theme.colors.green4}
            />
            <Text data-testid='card-receipt-link' ml='4px' {...theme.typography.mdBold} color={theme.colors.green4} as='a' href={receipt}>
              Ver recibo
            </Text>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

TimelineCard.propTypes = {
  item: PropTypes.object,
};

TimelineCard.defaultProps = {
  item: {},
};

export default TimelineCard;
