import PropTypes from 'prop-types';
import {
  Box, Flex, Icon, Text,
} from '@chakra-ui/react';

import theme from '../../theme/theme';

const EarningsAndExpenses = ({
  text, value, icon, ...props
}) => (
  <Flex
    mt={['24px', '24px', 0]}
    alignItems='center'
    {...props}
  >
    <Flex
      w='26px'
      h='26px'
      alignItems='center'
      justifyContent='center'
      borderRadius='50%'
      border={`1px solid ${theme.colors.gray2}`}
      color={theme.colors.gray2}
    >
      <Icon as={icon} fontSize='11px' />
    </Flex>
    <Box ml='12px'>
      <Text {...theme.typography.xs} color={theme.colors.gray3}>
        {text}
      </Text>
      <Text {...theme.typography.md} color={theme.colors.gray7}>
        {value}
      </Text>
    </Box>
  </Flex>
);

EarningsAndExpenses.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.func,
};

EarningsAndExpenses.defaultProps = {
  text: '',
  value: '',
  icon: null,
};

export default EarningsAndExpenses;
