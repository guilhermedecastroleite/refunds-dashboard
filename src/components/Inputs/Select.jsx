import PropTypes from 'prop-types';
import { Select as ChakraSelect, Text } from '@chakra-ui/react';

import theme from '../../theme/theme';

const Select = ({ error, children, ...props }) => (
  <>
    <ChakraSelect {...props}>
      {children}
    </ChakraSelect>
    {error && (
      <Text {...theme.typography.xs} color={theme.colors.red2}>
        {error}
      </Text>
    )}
  </>
);

Select.propTypes = {
  error: PropTypes.string,
  children: PropTypes.any,
};

Select.defaultProps = {
  error: '',
  children: null,
};

export default Select;
