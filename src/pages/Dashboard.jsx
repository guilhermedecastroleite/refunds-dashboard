import { Box } from '@chakra-ui/react';
import Breadcrumbs from '../components/Breadcrumbs';

const Dashboard = () => {
  const remove = false;

  return (
    <Box pl='28px' pt='12px'>
      <Breadcrumbs />
    </Box>
  );
};

export default Dashboard;
