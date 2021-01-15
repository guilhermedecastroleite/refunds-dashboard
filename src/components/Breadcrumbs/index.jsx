import PropTypes from 'prop-types';

import { Flex, Text } from '@chakra-ui/react';
import theme from '../../theme/theme';

const Breadcrumbs = ({ history }) => (
  <Flex>
    {history.map((item, index, arr) => {
      const lastItem = index !== arr.length - 1;
      return (
        <>
          <Text color={lastItem ? theme.colors.blue2 : theme.colors.gray5} {...theme.typography.medium}>{`${item.label}`}</Text>
          <Text mx='6px' color={theme.colors.gray5} {...theme.typography.medium}>
            {`${lastItem ? '/' : ''}`}
          </Text>
        </>
      );
    })}
  </Flex>
);

Breadcrumbs.propTypes = {
  history: PropTypes.array,
};

Breadcrumbs.defaultProps = {
  history: [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'QuickOps', href: '/quick-ops' },
    { label: 'Current', href: '/current' },
  ],
};

export default Breadcrumbs;
