import React, { useState, useEffect } from 'react';
import {
  Box, Flex, Text,
} from '@chakra-ui/react';

import theme from '../../theme/theme';
import getSidebarData from '../../api/sidebar';

import Chip from '../../components/Chips';

import Refund from './Refund';
import Statement from './Statement';

const statuses = (appTheme) => ({
  finished: {
    label: 'Concluído',
    color: appTheme.colors.green6,
  },
  open: {
    label: 'Aguardando financeiro',
    color: appTheme.colors.blue4,
  },
});

const SideBar = () => {
  const [sideBarData, setSideBarData] = useState([{
    id: null,
    accountabilityStatus: 'OPEN',
    currency: {
      id: null,
      code: '',
      symbol: '',
    },
    declared: 0,
    approved: 0,
    received: 0,
  }]);

  const status = statuses(theme)[sideBarData[0].accountabilityStatus.toLowerCase()];

  useEffect(() => {
    const fetchSidebarData = async () => {
      const { data } = await getSidebarData();
      setSideBarData(data.content);
    };
    fetchSidebarData();
  }, []);

  return (
    <Box
      ml='54px'
      pt='40px'
      minW='393px'
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
