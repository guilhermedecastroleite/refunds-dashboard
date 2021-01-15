import { Box, Flex } from '@chakra-ui/react';

import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import AddExpense from '../containers/Expenses/AddExpense';

import theme from '../theme/theme';

const Dashboard = () => {
  const remove = false;

  return (
    <Box pl='28px' pt='12px' w='100%' bg={theme.colors.offWhite2}>
      <Breadcrumbs />
      <Flex>
        <Box>
          <Header />
          <AddExpense boxProps={{ mt: '24px' }} />
        </Box>
        <Box w='393px' h='100vh' ml='54px' bg={theme.colors.white} />
      </Flex>
    </Box>
  );
};

export default Dashboard;
