import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';

import theme from '../../theme/theme';

const BasePage = ({ children }) => (
  <Box overflow='auto' minHeight='100vh'>
    <Box w='100%' h='48px' zIndex={9999} bg={theme.colors.blue4} position='fixed' top={0} />
    <Flex>
      <Box w='220px' h='100vh' zIndex={9999} bg={theme.colors.blue4} position='fixed' left={0} />
      <Box mt='48px' ml='220px'>
        {children}
      </Box>
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
