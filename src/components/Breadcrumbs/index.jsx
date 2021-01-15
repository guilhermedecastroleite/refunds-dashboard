import PropTypes from 'prop-types';

import { Flex, Text } from '@chakra-ui/react';
import theme from '../../theme/theme';

const Breadcrumbs = ({ history }) => (
  <Flex>
    {history.map((item, index, arr) => {
      const notLast = index !== arr.length - 1;
      return (
        <>
          <Text
            cursor='pointer'
            color={notLast ? theme.colors.blue2 : theme.colors.gray5}
            // eslint-disable-next-line no-console
            onClick={() => notLast && console.log(`Go to ${item.href}`)}
            {...theme.typography.md}
          >
            {`${item.label}`}
          </Text>
          <Text mx='6px' color={theme.colors.gray5} {...theme.typography.md}>
            {`${notLast ? '/' : ''}`}
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
