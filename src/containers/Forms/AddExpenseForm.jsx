import {
  Box, Button, Flex, Icon, Text,
} from '@chakra-ui/react';
import { FaQuestionCircle } from 'react-icons/fa';

import theme from '../../theme/theme';

const AddExpenseForm = () => (
  <Flex>
    <Box p='52px 92px' bg={theme.colors.white}>
      <Flex alignItems='center'>
        <Text {...theme.typography.mdBold} color={theme.colors.gray8}>
          Recibo, cupom ou nota fiscal*
        </Text>
        <Icon ml='4px' as={FaQuestionCircle} color={theme.colors.gray2} />
      </Flex>
      <Box mt='9px' p='110px 24px 44px 24px' border={`1px dashed ${theme.colors.gray12}`} borderRadius='3px'>
        <Button variant='outline' color={theme.colors.gray10} borderColor={theme.colors.gray12}>
          Selecione um arquivo do seu computador
        </Button>
      </Box>
      <Text {...theme.typography.xs} color={theme.colors.gray13}>
        A imagem deve estar no formato JPG ou PNG.
      </Text>
    </Box>
    <Box ml='48px'>Inputs</Box>
  </Flex>
);

export default AddExpenseForm;
