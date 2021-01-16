import PropTypes from 'prop-types';
import { Flex, Text } from '@chakra-ui/react';

import theme from '../../theme/theme';

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const Chip = ({
  color, children, ...props
}) => (
  <Flex
    p='6px 12px'
    maxW='fit-content'
    color={color}
    border={`1px solid ${color}`}
    bg={hex2rgba(color, 0.10)}
    borderRadius='18px'
    {...props}
  >
    {children}
  </Flex>
);

Chip.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
};

Chip.defaultProps = {
  color: '',
  children: null,
};

export default Chip;
