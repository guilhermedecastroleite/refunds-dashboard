import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import theme from '../../theme/theme';
import { useWindowSize } from '../../hooks/useWindowSize';

const BasePage = ({ children }) => {
  const size = useWindowSize();
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(size.width > 1536);

  const handleClick = (e) => {
    if (menuRef.current.contains(e.target)) {
      return;
    }
    setShowMenu(false);
  };

  useEffect(() => {
    setShowMenu(size.width > 1536);
  }, [size]);

  useEffect(() => {
    // Mount
    document.addEventListener('mousedown', handleClick);
    // Unmount
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <Box overflow='auto' minHeight='100vh'>
      <Flex
        w='100%'
        px='24px'
        h={['64px', '64px', '64px', '64px', '64px', '48px']}
        zIndex={9999}
        bg={theme.colors.blue4}
        position='fixed'
        top={0}
        flexDirection='column'
        justifyContent='center'
      >
        <Icon
          as={FaBars}
          color={theme.colors.white}
          fontSize='24px'
          cursor='pointer'
          display={['initial', 'initial', 'initial', 'initial', 'initial', 'none']}
          onClick={() => setShowMenu(true)}
        />
      </Flex>
      <Flex>
        <Box
          w='220px'
          h='100vh'
          zIndex={9999}
          bg={theme.colors.blue4}
          position='fixed'
          left={(showMenu || size.width > 1536) ? 0 : '-220px'}
          transition='all 300ms ease-in-out'
          ref={menuRef}
        />
        <Box w='100%' mt={['64px', '64px', '64px', '64px', '64px', '48px']} ml={[0, 0, 0, 0, 0, '220px']}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

BasePage.propTypes = {
  children: PropTypes.any,
};

BasePage.defaultProps = {
  children: null,
};

export default BasePage;
