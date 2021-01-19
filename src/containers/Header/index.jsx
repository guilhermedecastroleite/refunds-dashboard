import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Divider as ChakraDivider, Flex, Grid, GridItem, Icon, Input, Text,
} from '@chakra-ui/react';
import { FaRegEdit, FaGraduationCap } from 'react-icons/fa';
import { format } from 'date-fns';

import theme from '../../theme/theme';
import getHeaderData from '../../api/header';
import { useWindowSize } from '../../hooks/useWindowSize';
import Loading from '../../components/Layout/Loading';
import Error from '../../components/Layout/Error';

const types = {
  REFUND: 'Reembolso',
};

const purposes = {
  FRATERNIZATION: 'Confraternização',
};

const HeaderCard = ({ children }) => (
  <Box
    mt='36px'
    py='24px'
    px={['24px', '24px', '48px', '48px', '48px']}
    w='100%'
    h='fit-content'
    bg={`linear-gradient(to right, ${theme.colors.green3} 3%, ${theme.colors.blue3})`}
    borderRadius='12px'
    position='relative'
  >
    {children}
  </Box>
);

HeaderCard.propTypes = {
  children: PropTypes.any.isRequired,
};

const ListItem = ({ title, content, ...props }) => (
  <Grid
    templateColumns='repeat(3, 1fr)'
    gap='29px'
    mt={['4px', '4px', '11px']}
    {...props}
  >
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

const Divider = () => {
  const orientation = useWindowSize().width < 768 ? 'horizontal' : 'vertical';

  return (
    <ChakraDivider
      w={['60%', '60%', '2px']}
      h={['2px', '2px', '120px']}
      my={['24px', '24px', 0]}
      orientation={orientation}
      borderColor={theme.colors.offWhite}
      opacity={1}

    />
  );
};

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [headerData, setHeaderData] = useState(null);
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

  // useEffect(() => {
  //   const fetchHeaderData = async () => {
  //     const { data } = await getHeaderData();
  //     setHeaderData(data);
  //     setAnalyst(data.analyst || '');
  //   };
  //   fetchHeaderData();
  // }, []);

  useEffect(() => {
    const fetchHeaderData = async () => {
      setLoading(true);

      try {
        const { data } = await getHeaderData();
        setHeaderData(data);
        setAnalyst(data.analyst || '');
      }

      catch (err) {
        setError(err);
      }

      finally {
        setLoading(false);
      }
    };
    fetchHeaderData();
  }, []);

  if (loading) {
    return (
      <HeaderCard>
        <Flex w='100%' justifyContent='center' alignItems='center'>
          <Loading />
        </Flex>
      </HeaderCard>
    );
  }

  if (error) {
    return <Error open={error} error={error} />;
  }

  return (
    <HeaderCard>
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
      <Flex mt='10px' alignItems='center' flex={10} flexDirection={['column', 'column', 'row', 'row', 'row']}>
        {/** Basic Data */}
        <Box flex={4} h='100%'>
          <ListItem
            title='Nome'
            content={headerData.collaborator.name}
          />
          <ListItem
            title='Email'
            content={headerData.collaborator.email}
          />
          <ListItem
            title='Justificativa'
            content={headerData.justification}
          />
          <ListItem
            title='Finalidade'
            content={(purposes || {})[headerData.purpose]}
          />
          <ListItem
            title='Projeto'
            content={headerData.project.title}
          />
          <ListItem
            title='Data'
            content={format(headerData.accountabilityExtraInfo.eventDate, 'dd/MM/yyyy')}
          />
          <ListItem
            title='Quantidade'
            content={headerData.accountabilityExtraInfo.amountOfPeople}
          />
          <ListItem
            title='Inclui café da manhã'
            content={headerData.accountabilityExtraInfo.budgetForBreakfast ? 'Sim' : 'Não'}
          />
        </Box>

        <Divider />

        {/** Costs */}
        <Flex flex={3} alignItems='center' flexDirection='column' h='100%'>
          <Box mt={[0, 0, '11px']}>
            {!headerData.analyst && (
              <Box mb={['16px', '16px', '32px']}>
                <Text {...theme.typography.sm} lineHeight={1.71} color={theme.colors.white}>
                  Atribuir Analista
                </Text>
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
            <Divider />

            {/** Budget */}
            <Box flex={3} h='100%' textAlign='center' pl={[0, 0, '33px']}>
              <Icon as={FaGraduationCap} color={theme.colors.white} style={{ fontSize: '28px' }} />
              <Text mt='16px' {...theme.typography.smBold} lineHeight={1.43} color={theme.colors.white}>
                Esta solicitação será paga com o Budget de educação / confraternização.
              </Text>
            </Box>
          </>
        )}
      </Flex>
    </HeaderCard>
  );
};

export default Header;
