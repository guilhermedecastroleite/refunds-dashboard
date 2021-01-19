import { useState, useEffect } from 'react';
import {
  Box, Button, Flex, Icon,
} from '@chakra-ui/react';
import { FaReceipt } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';

import Header from '../containers/Header';
import SideBar from '../containers/SideBar';
import Timeline from '../containers/Timeline';
import ActionBar from '../containers/ActionBar';
import Breadcrumbs from '../components/Breadcrumbs';
import AddExpense from '../containers/Expenses/AddExpense';

import theme from '../theme/theme';
import getTimelineData from '../api/timeline';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [timelineData, setTimelineData] = useState([]);

  const updateData = (value) => {
    setTimelineData([...timelineData, value].sort((a, b) => b.cardDate - a.cardDate));
  };

  useEffect(() => {
    const fetchTimelineData = async () => {
      setLoading(true);

      try {
        const { data } = await getTimelineData();
        setTimelineData(data.content);
      }

      catch (err) {
        setError(err);
      }

      finally {
        setLoading(false);
      }
    };
    fetchTimelineData();
  }, []);

  return (
    <Box
      pl={['16px', '16px', '28px']}
      pr={['16px', '16px', '28px', '28px', 0]}
      pt='12px'
      w='100%'
      bg={theme.colors.offWhite2}
    >
      <Breadcrumbs />
      <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
        <Box width='100%'>
          <Header />
          {/** Top Buttons */}
          <Flex mt='24px' justifyContent='flex-end'>
            <Button
              variant='outline'
              leftIcon={<Icon as={CgNotes} />}
            >
              Inserir notas em lote
            </Button>
            <Button
              ml='24px'
              variant='outline'
              leftIcon={<Icon as={FaReceipt} />}
              onClick={() => setShowForm(true)}
            >
              Nova despesa
            </Button>
          </Flex>
          {showForm && (
            <AddExpense
              onCancel={() => setShowForm(false)}
              onUpdate={updateData}
            />
          )}
          <Timeline boxProps={{ mt: '24px' }} data={timelineData} error={error} loading={loading} />
          <ActionBar />
        </Box>
        <SideBar />
      </Flex>
    </Box>
  );
};

export default Dashboard;
