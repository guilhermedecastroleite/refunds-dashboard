import { Box, Flex } from '@chakra-ui/react';

import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../containers/Header';
import AddExpense from '../containers/Expenses/AddExpense';
import Timeline from '../containers/Timeline';
import ActionBar from '../containers/ActionBar';
import SideBar from '../containers/SideBar';

import theme from '../theme/theme';

const Dashboard = () => {
  const remove = false;

  return (
    <Box
      pl='28px'
      pt='12px'
      w='100%'
      bg={theme.colors.offWhite2}
    >
      <Breadcrumbs />
      <Flex>
        <Box>
          <Header />
          <AddExpense boxProps={{ mt: '24px' }} />
          <Timeline boxProps={{ mt: '24px' }} />
          <ActionBar />
        </Box>
        <SideBar />
      </Flex>
    </Box>
  );
};

export default Dashboard;
