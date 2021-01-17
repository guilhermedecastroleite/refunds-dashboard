import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Divider, Flex, Grid, GridItem, Icon, Input, Text,
} from '@chakra-ui/react';
import { FaRegEdit, FaGraduationCap } from 'react-icons/fa';
import { format } from 'date-fns';

import theme from '../../theme/theme';
import getHeaderData from '../../api/header';

const types = {
  REFUND: 'Reembolso',
};

const purposes = {
  FRATERNIZATION: 'Confraternização',
};

const ListItem = ({ title, content, ...props }) => (
  <Grid templateColumns='repeat(3, 1fr)' gap='29px' {...props}>
    <GridItem colSpan={1} textAlign='right'>
      <Text color={theme.colors.white} {...theme.typography.sm}>
        {title}
      </Text>
    </GridItem>
    <GridItem colSpan={2}>
      <Text color={theme.colors.white} {...theme.typography.smBold}>
        {content || '-'}
      </Text>
    </GridItem>
  </Grid>
);

ListItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ListItem.defaultProps = {
  title: '',
  content: '',
};

const Header = () => {
  const [headerData, setHeaderData] = useState({
    type: '',
    purpose: '',
    justification: '',
    accountabilityExtraInfo: {
      budgetForBreakfast: null,
      eventDate: new Date(),
      amountOfPeople: 0,
    },
    project: { title: '' },
    costCenters: [{ id: 0, percentage: 0, name: '' }],
    fraternizationEducationBudget: false,
    collaborator: { id: 0, name: '', email: '' },
  });
  const [analyst, setAnalyst] = useState('');

  useEffect(() => {
    const fetchHeaderData = async () => {
      const { data } = await getHeaderData();
      setHeaderData(data);
      setAnalyst(data.analyst || '');
    };
    fetchHeaderData();
  }, []);

  return (
    <Box
      mt='36px'
      py='24px'
      px='48px'
      w='100%'
      h='fit-content'
      bg={`linear-gradient(to right, ${theme.colors.green3} 3%, ${theme.colors.blue3})`}
      borderRadius='12px'
      position='relative'
    >
      <Icon
        as={FaRegEdit}
        color={theme.colors.white}
        style={{
          position: 'absolute', right: '12px', top: '12px', cursor: 'pointer', fontSize: '21px',
        }}
      />
      {/** Title */}
      <Text color={theme.colors.white} {...theme.typography.lgBold}>
        {`${(types || {})[headerData.type]} - ${(purposes || {})[headerData.purpose]}`}
      </Text>
      <Flex mt='10px' alignItems='center' flex={10}>
        {/** Basic Data */}
        <Box flex={4} h='100%'>
          <ListItem
            mt='11px'
            title='Nome'
            content={headerData.collaborator.name}
          />
          <ListItem
            mt='11px'
            title='Email'
            content={headerData.collaborator.email}
          />
          <ListItem
            mt='11px'
            title='Justificativa'
            content={headerData.justification}
          />
          <ListItem
            mt='11px'
            title='Finalidade'
            content={(purposes || {})[headerData.purpose]}
          />
          <ListItem
            mt='11px'
            title='Projeto'
            content={headerData.project.title}
          />
          <ListItem
            mt='11px'
            title='Data'
            content={format(headerData.accountabilityExtraInfo.eventDate, 'dd/MM/yyyy')}
          />
          <ListItem
            mt='11px'
            title='Quantidade'
            content={headerData.accountabilityExtraInfo.amountOfPeople}
          />
          <ListItem
            mt='11px'
            title='Inclui café da manhã'
            content={headerData.accountabilityExtraInfo.budgetForBreakfast ? 'Sim' : 'Não'}
          />
        </Box>

        <Divider orientation='vertical' w='2px' h='120px' borderColor={theme.colors.offWhite} opacity={1} />

        {/** Costs */}
        <Flex flex={3} alignItems='center' flexDirection='column' h='100%'>
          <Box mt='11px'>
            {!headerData.analyst && (
              <Box mb='32px'>
                <Text {...theme.typography.sm} lineHeight={1.71} color={theme.colors.white}>Atribuir Analista</Text>
                <Input
                  mt='16px'
                  label='Atribuir analista'
                  value={analyst}
                  onChange={(e) => setAnalyst(e.target.value)}
                  variant='filled'
                  bg={theme.colors.white}
                  _focus={{ bg: theme.colors.white }}
                  _hover={{ bg: theme.colors.white }}
                />
              </Box>
            )}
            <Text {...theme.typography.sm} lineHeight={1.71} color={theme.colors.white}>Centro de custo</Text>
            {headerData.costCenters.map((item) => (
              <Text key={item.id} {...theme.typography.mdBold} color={theme.colors.white}>
                {`${item.percentage}% - ${item.name}`}
              </Text>
            ))}
          </Box>
        </Flex>

        {headerData.fraternizationEducationBudget && (
          <>
            <Divider orientation='vertical' w='2px' h='120px' borderColor={theme.colors.offWhite} opacity={1} />

            {/** Budget */}
            <Box flex={3} h='100%' textAlign='center' pl='33px'>
              <Icon as={FaGraduationCap} color={theme.colors.white} style={{ fontSize: '28px' }} />
              <Text mt='16px' {...theme.typography.smBold} lineHeight={1.43} color={theme.colors.white}>
                Esta solicitação será paga com o Budget de educação / confraternização.
              </Text>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
