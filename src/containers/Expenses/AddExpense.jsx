import PropTypes from 'prop-types';
import {
  Box, Button, Flex, Icon, Text,
} from '@chakra-ui/react';
import { FaReceipt } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import theme from '../../theme/theme';
import addExpense from '../../api/expense';

import AddExpenseForm from '../Forms/AddExpenseForm';

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required('O arquivo é obrigatório').test('fileSize', 'O arquivo é muito grande', (value) => (value || {}).size <= 1000000),
  type: Yup.string().required('O tipo é obrigatório'),
  currency: Yup.string().required('A moeda é obrigatória'),
  title: Yup.string().required('O título é obrigatório'),
  date: Yup.string().required('A data é obrigatória'),
  receiptValue: Yup.string().required('O valor é obrigatório'),
  consideredReceiptValue: Yup.string().required('O valor é obrigatório'),
});

const AddExpense = ({ boxProps }) => {
  const initialValues = {
    file: null,
    type: '',
    currency: '',
    title: '',
    date: '',
    receiptValue: '',
    consideredReceiptValue: '',
  };

  const onSubmit = async (values) => {
    await addExpense({
      data: {
        expenseTypeCode: values.type,
        currencyCode: values.currency,
        amountSpent: values.consideredReceiptValue,
        amountTotal: values.receiptValue,
        notes: values.title,
        resourceUrl: values.file,
        cardDate: values.date,
      },
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log('Formik: ', formik.values);

  return (
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
        <form onSubmit={formik.handleSubmit}>
          {/** Form */}
          <Box pt='24px' pb='12px' px='48px' bg={theme.colors.offWhite}>
            <Text {...theme.typography.lgBold} color={theme.colors.gray9}>Nova Despesa</Text>
            <AddExpenseForm formik={formik} />
          </Box>

          {/** Card Bottom Bar */}
          <Flex
            h='77px'
            pr='24px'
            justifyContent='flex-end'
            alignItems='center'
            bg={theme.colors.white}
          >
            <Button variant='outline' type='button'>
              Cancelar
            </Button>
            <Button ml='24px' variant='solid' type='submit'>
              Salvar
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

AddExpense.propTypes = {
  boxProps: PropTypes.object,
};

AddExpense.defaultProps = {
  boxProps: {},
};

export default AddExpense;
