import React, { useState, useEffect } from 'react';
import {
  Box, Flex, Text,
} from '@chakra-ui/react';

import theme from '../../theme/theme';
import getSidebarData from '../../api/sidebar';
import { requestStatuses } from '../../config/maps';

import Chip from '../../components/Chips';

import Refund from './Refund';
import Statement from './Statement';
import Loading from '../../components/Layout/Loading';
import Error from '../../components/Layout/Error';

const SideBar = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sideBarData, setSideBarData] = useState();

  const status = sideBarData && requestStatuses[sideBarData[0].accountabilityStatus.toLowerCase()];

  useEffect(() => {
    const fetchSidebarData = async () => {
      setLoading(true);

      try {
        const { data } = await getSidebarData();
        setSideBarData(data.content);
      }

      catch (err) {
        setError(err);
      }

      finally {
        setLoading(false);
      }
    };
    fetchSidebarData();
  }, []);

  if (loading) {
    return (
      <Flex
        ml={[0, 0, 0, '24px', '40px', '54px']}
        px={['40px', '64px', '104px', '197px']}
        mt={['24px', '24px', '12px']}
        mb={['24px', '24px', 0]}
        py='40px'
        minH='100vh'
        bg={theme.colors.white}
        justifyContent='center'
        alignItems='center'
      >
        <Loading />
      </Flex>
    );
  }

  if (error) {
    return <Error open={error} error={error} />;
  }

  return (
    <Box
      ml={[0, 0, 0, 0, 0, '24px', '40px', '54px']}
      mt={[0, 0, '24px', '24px', '24px', '12px']}
      mb={['24px', '24px', '24px', '24px', '24px', 0]}
      py='40px'
      minH='100vh'
      bg={theme.colors.white}
    >
      <Flex px='37px' flexDirection='column' alignItems='center'>
        {/** Status Chip */}
        <Chip color={status.color} w='100%' borderRadius='6px'>
          <Box py='12px' w='100%' textAlign='center'>
            <Text {...theme.typography.md}>Status</Text>
            <Text {...theme.typography.xlBold}>{status.label}</Text>
          </Box>
        </Chip>
      </Flex>

      {/** Refund List */}
      {sideBarData.map((item) => (
        <React.Fragment key={item.currency.id}>
          <Flex px='37px' flexDirection='column' alignItems='center'>
            <Refund item={item} />
          </Flex>
          {/** Statement */}
          <Statement mt='40px' item={item} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default SideBar;
