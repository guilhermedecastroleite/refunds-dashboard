import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';

import theme from '../../theme/theme';

const BasePage = ({ children }) => (
  <Box overflow='auto' minHeight='100vh'>
    <Box w='100%' h={['64px', '64px', '64px', '64px', '64px', '48px']} zIndex={9999} bg={theme.colors.blue4} position='fixed' top={0} />
    <Flex>
      <Box
        w='220px'
        h='100vh'
        zIndex={9999}
        bg={theme.colors.blue4}
        position='fixed'
        left={0}
        display={['none', 'none', 'none', 'none', 'none', 'initial']}
      />
      <Box w='100%' mt={['64px', '64px', '64px', '64px', '64px', '48px']} ml={[0, 0, 0, 0, 0, '220px']}>
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
