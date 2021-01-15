import PropTypes from 'prop-types';
import {
  Box, Divider, Flex, Icon, Text,
} from '@chakra-ui/react';
import { FaRegEdit, FaGraduationCap } from 'react-icons/fa';

import theme from '../../theme/theme';

const ListItem = ({ title, content }) => (
  <Flex>
    <Text mr='29px' color={theme.colors.white} {...theme.typography.sm}>{title}</Text>
    <Text color={theme.colors.white} {...theme.typography.smBold}>{content}</Text>
  </Flex>
);

ListItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

ListItem.defaultProps = {
  title: '',
  content: '',
};

const Header = () => {
  const title = 'Reemboldo - Confraternização';

  return (
    <Box
      mt='36px'
      pt='25px'
      px='48px'
      w='100%'
      h='226px'
      bg={`linear-gradient(to right, ${theme.colors.green3} 3%, ${theme.colors.blue3})`}
      borderRadius='12px'
      position='relative'
      display='block'
    >
      <Icon
        as={FaRegEdit}
        color={theme.colors.white}
        style={{
          position: 'absolute', right: '12px', top: '12px', cursor: 'pointer', fontSize: '21px',
        }}
      />
      <Text color={theme.colors.white} {...theme.typography.lgBold}>{title}</Text>
      <Flex mt='10px' alignItems='center' h='120px' flex={10}>
        {/** Basic Data */}
        <Box flex={4} h='100%'>
          <ListItem
            title='Justificativa'
            content='Reembolso referente a confraternização das equipes Backoffice / BI / Analytics.'
          />
        </Box>

        <Divider orientation='vertical' w='2px' h='100%' borderColor={theme.colors.white} opacity={1} />

        {/** Costs */}
        <Flex flex={3} alignItems='center' flexDirection='column' h='100%'>
          <Box mt='11px'>
            <Text {...theme.typography.sm} lineHeight={1.71} color={theme.colors.white}>Centro de custo</Text>
            <Text {...theme.typography.md} color={theme.colors.white}>50% - TEC-DEV-Back Office</Text>
            <Text {...theme.typography.md} color={theme.colors.white}>50% - BKO-DEV-BI-Analytics</Text>
          </Box>
        </Flex>

        <Divider orientation='vertical' w='2px' h='100%' borderColor={theme.colors.white} opacity={1} />

        {/** Budget */}
        <Box flex={3} h='100%' textAlign='center' pl='33px'>
          <Icon as={FaGraduationCap} color={theme.colors.white} style={{ fontSize: '28px' }} />
          <Text mt='16px' {...theme.typography.smBold} lineHeight={1.43} color={theme.colors.white}>
            Esta solicitação será paga com o Budget de educação / confraternização.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
