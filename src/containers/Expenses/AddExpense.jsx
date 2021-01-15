import PropTypes from 'prop-types';
import {
  Box, Button, Flex, Icon, Text,
} from '@chakra-ui/react';
import { FaReceipt } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';

import theme from '../../theme/theme';
import AddExpenseForm from '../Forms/AddExpenseForm';

const AddExpense = ({ boxProps }) => (
  <Box w='100%' {...boxProps}>
    {/** Top Buttons */}
    <Flex justifyContent='flex-end'>
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
      >
        Nova despesa
      </Button>
    </Flex>

    {/** Form Card */}
    <Box mt='24px' w='100%' boxShadow='md' borderRadius='6px' overflow='hidden'>
      {/** Form */}
      <Box pt='24px' pb='12px' px='48px' bg={theme.colors.offWhite}>
        <Text {...theme.typography.lgBold} color={theme.colors.gray9}>Nova Despesa</Text>
        <AddExpenseForm />
      </Box>

      {/** Card Bottom Bar */}
      <Flex
        h='77px'
        pr='24px'
        justifyContent='flex-end'
        alignItems='center'
        bg={theme.colors.white}
      >
        <Button variant='outline'>
          Cancelar
        </Button>
        <Button ml='24px' variant='solid'>
          Salvar
        </Button>
      </Flex>
    </Box>
  </Box>
);

AddExpense.propTypes = {
  boxProps: PropTypes.object,
};

AddExpense.defaultProps = {
  boxProps: {},
};

export default AddExpense;
