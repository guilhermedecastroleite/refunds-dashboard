import PropTypes from 'prop-types';
import { Input as ChakraInput, Text } from '@chakra-ui/react';

import theme from '../../theme/theme';

const Input = ({ error, ...props }) => (
  <>
    <ChakraInput {...props} />
    {error && (
      <Text {...theme.typography.xs} color={theme.colors.red2}>
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
