import PropTypes from 'prop-types';
import { Input as ChakraInput, Text } from '@chakra-ui/react';

import theme from '../../theme/theme';

const Input = ({ error, ...props }) => (
  <>
    <ChakraInput data-testid='input' {...props} />
    {error && (
      <Text data-testid='input-error' {...theme.typography.xs} color={theme.colors.red2}>
        {error}
      </Text>
    )}
  </>
);

Input.propTypes = {
  error: PropTypes.string,
};

Input.defaultProps = {
  error: '',
};

export default Input;
