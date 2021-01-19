import PropTypes from 'prop-types';
import {
  Box, Button, Flex, Icon, Text,
} from '@chakra-ui/react';

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

const AddExpense = ({ onCancel, onUpdate, boxProps }) => {
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
    const { data } = await addExpense({
      data: {
        expenseTypeCode: values.type,
        currencyCode: values.currency,
        amountSpent: values.consideredReceiptValue,
        amountTotal: values.receiptValue,
        notes: values.title,
        resourceUrl: values.file,
        cardDate: +new Date(values.date),
      },
    });
    onUpdate(data);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box w='100%' {...boxProps}>
      {/** Form Card */}
      <Box mt='24px' w='100%' boxShadow='md' borderRadius='6px' overflow='hidden'>
        <form onSubmit={formik.handleSubmit}>
          {/** Form */}
          <Box pt='24px' pb='12px' px={['16px', '16px', '24px', '48px']} bg={theme.colors.offWhite}>
            <Text {...theme.typography.lgBold} color={theme.colors.gray9}>Nova Despesa</Text>
            <AddExpenseForm formik={formik} />
          </Box>

          {/** Card Bottom Bar */}
          <Flex
            pr='24px'
            pl={['24px', '24px', 0]}
            pt='24px'
            pb='18px'
            justifyContent='flex-end'
            flexDirection={['column', 'column', 'row']}
            alignItems='center'
            bg={theme.colors.white}
          >
            <Button
              w={['100%', '100%', 'fit-content']}
              variant='outline'
              type='button'
              onClick={onCancel}
            >
              Cancelar
            </Button>
            <Button
              w={['100%', '100%', 'fit-content']}
              mt={['16px', '16px', 0]}
              ml={[0, 0, '24px']}
              variant='solid'
              type='submit'
              isDisabled={!formik.isValid && !formik.isSubmitting}
            >
              Salvar
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

AddExpense.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  boxProps: PropTypes.object,
};

AddExpense.defaultProps = {
  boxProps: {},
};

export default AddExpense;
