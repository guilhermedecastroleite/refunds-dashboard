import PropTypes from 'prop-types';
import {
  Box, Flex, Icon, Text,
} from '@chakra-ui/react';
import {
  FaAsterisk, FaChevronUp, FaReceipt, FaMoneyCheckAlt,
} from 'react-icons/fa';

import Chip from '../Chips';

import theme from '../../theme/theme';

const TimelineCard = ({ type }) => {
  const types = {
    initial: {
      icon: FaAsterisk,
      backgroundColor: theme.colors.green1,
      iconColor: theme.colors.green9,
    },
  };

  return (
    <Flex
      p='24px 48px'
      bg={theme.colors.white}
      borderRadius='6px'
      boxShadow='md'
      alignItems='center'
      position='relative'
    >
      {/** Icon and Date */}
      <Flex flexDirection='column' alignItems='center'>
        <Flex
          w='59px'
          h='59px'
          justifyContent='center'
          alignItems='center'
          bg={types[type].backgroundColor}
          borderRadius='50%'
        >
          <Icon fontSize='20px' as={types[type].icon} color={types[type].iconColor} />
        </Flex>
        <Text mt='10px' {...theme.typography.sm}>20/05/2019</Text>
      </Flex>

      {/** Category and Title */}
      <Box ml='112px'>
        <Text {...theme.typography.xsBold} color={theme.colors.gray2}>
          {'Ação'.toUpperCase()}
        </Text>
        <Text mt='3px' {...theme.typography.lgBold} color={theme.colors.gray6}>
          Pedido de reembolso criado por Thiago Marques
        </Text>
      </Box>

      {/** Value */}
      {/* <Box ml='123px'>
        <Text {...theme.typography.xsBold} color={theme.colors.gray2}>
          {'Valor'.toUpperCase()}
        </Text>
        <Text mt='3px' {...theme.typography.lgBold} color={theme.colors.gray6}>
          BRL 120,00
        </Text>
        <Text {...theme.typography.md} color={theme.colors.gray6}>
          Valor da nota: BRL 220,00
        </Text>
      </Box> */}

      {/** Aprovals */}
      {/* <Box ml='120px'>
        <Text {...theme.typography.xsBold} color={theme.colors.gray2}>
          {'Aprovações'.toUpperCase()}
        </Text>
        <Flex mt='3px' alignItems='center' cursor='pointer'>
          <Text {...theme.typography.mdBold} color={theme.colors.green4}>
            Ver detalhes
          </Text>
          <Icon
            ml='4px'
            as={FaChevronUp}
            {...theme.typography.mdBold}
            color={theme.colors.green4}
          />
        </Flex>
      </Box> */}

      {/** Status */}
      <Box ml='128px'>
        <Text {...theme.typography.xsBold} color={theme.colors.gray2}>
          {'Status'.toUpperCase()}
        </Text>
        <Chip mt='3px' color={theme.colors.green7}>
          <Text {...theme.typography.xsBold}>Aprovado</Text>
        </Chip>
        <Text mt='7px' {...theme.typography.xs} color={theme.colors.gray11}>
          Reprovado pois você está gastando demais da conta!
        </Text>
      </Box>

      {/** Invoice */}
      {/* <Box position='absolute' right='81px'>
        <Flex mt='3px' alignItems='center' cursor='pointer'>
          <Icon
            as={FaReceipt}
            {...theme.typography.mdBold}
            color={theme.colors.green4}
          />
          <Text ml='4px' {...theme.typography.mdBold} color={theme.colors.green4}>
            Ver nota fiscal
          </Text>
        </Flex>
      </Box> */}

      {/** Receipt */}
      {/* <Box position='absolute' right='81px'>
        <Flex mt='3px' alignItems='center' cursor='pointer'>
          <Icon
            as={FaReceipt}
            {...theme.typography.mdBold}
            color={theme.colors.green4}
          />
          <Text ml='4px' {...theme.typography.mdBold} color={theme.colors.green4}>
            Ver recibo
          </Text>
        </Flex>
      </Box> */}
    </Flex>
  );
};

TimelineCard.propTypes = {
  type: PropTypes.string,
};

TimelineCard.defaultProps = {
  type: 'initial',
};

export default TimelineCard;
