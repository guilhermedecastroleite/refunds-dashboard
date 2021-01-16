import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';

import theme from '../../theme/theme';

const BasePage = ({ children }) => (
  <Box overflow='auto' minHeight='100vh'>
    <Box w='100%' h='48px' bg={theme.colors.blue4} />
    <Flex>
      <Box w='220px' h='100vh' bg={theme.colors.blue4} />
      {children}
    </Flex>
  </Box>
);

BasePage.propTypes = {
  children: PropTypes.any,
};

BasePage.defaultProps = {
  children: null,
};

export default BasePage;
