import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Flex, Icon, Text,
} from '@chakra-ui/react';
import { FaQuestionCircle } from 'react-icons/fa';

import theme from '../../theme/theme';
import { currencies, expenses } from '../../config/maps';

import { Select, Input } from '../../components/Inputs';
import DatePicker from '../../components/Inputs/Datepicker';

const AddExpenseForm = ({ formik }) => {
  const fileInput = useRef();

  const onClickUpload = () => {
    fileInput.current.click();
    formik.setFieldTouched('file');
  };

  return (
    <Flex flexDirection={['column', 'column', 'row']}>
      {/** File Upload */}
      <Box flex={1} p={[0, 0, '24px', '24px', '52px 92px']} textAlign='center' bg={theme.colors.white}>
        <Flex alignItems='center'>
          <Text {...theme.typography.mdBold} color={theme.colors.gray8}>
            Recibo, cupom ou nota fiscal*
          </Text>
          <Icon ml='4px' as={FaQuestionCircle} color={theme.colors.gray2} />
        </Flex>
        <input
          id='file'
          type='file'
          accept='.png, .jpg'
          ref={fileInput}
          onChange={(e) => formik.setFieldValue('file', e.target.files[0])}
          style={{ display: 'none' }}
        />
        <Box
          mt='9px'
          p={['24px 8px', '24px 8px', '110px 8px 44px 8px', '110px 24px 44px 24px']}
          border={`1px dashed ${theme.colors.gray12}`}
          borderRadius='3px'
          whiteSpace='normal'
        >
          <Button
            type='button'
            variant='outline'
            color={theme.colors.gray10}
            borderColor={theme.colors.gray12}
            onClick={onClickUpload}
          >
            Selecione um arquivo do seu computador
          </Button>
        </Box>
        <Text mt='8px' {...theme.typography.xs} color={theme.colors.gray13}>
          A imagem deve estar no formato JPG ou PNG.
        </Text>
        {(formik.touched.file && formik.errors.file) && (
          <Text {...theme.typography.xs} color={theme.colors.red2}>
            {formik.errors.file}
          </Text>
        )}
      </Box>

      {/** Inputs */}
      <Box flex={1} w='100%' mt={['16px', '16px', 0]} ml={[0, 0, '48px']}>
        <Text mb='12px' {...theme.typography.mdBold}>Tipo *</Text>
        <Select
          name='type'
          value={formik.values.type}
          onChange={formik.handleChange('type')}
          onBlur={formik.handleBlur('type')}
          error={formik.touched.type ? formik.errors.type : ''}
          placeholder='Selecione'
        >
          {Object.entries(expenses).map((item) => (
            <option key={item[0]} value={item[0]}>{item[1]}</option>
          ))}
        </Select>

        <Text my='12px' {...theme.typography.mdBold}>Título da despesa *</Text>
        <Input
          name='title'
          type='text'
          value={formik.values.title}
          onChange={formik.handleChange('title')}
          onBlur={formik.handleBlur('title')}
          error={formik.touched.title ? formik.errors.title : ''}
          placeholder='Ex: Almoço com colegas'
        />

        <Text my='12px' {...theme.typography.mdBold}>Data do comprovante *</Text>
        <DatePicker
          name='date'
          maxDate={new Date()}
          selected={formik.values.date}
          onChange={(date) => formik.setFieldValue('date', date)}
          onBlur={formik.handleBlur('date')}
          error={formik.touched.error ? formik.errors.error : ''}
        />

        <Text mt='12px' {...theme.typography.mdBold}>Moeda *</Text>
        <Select
          name='currency'
          value={formik.values.currency}
          onChange={formik.handleChange('currency')}
          onBlur={formik.handleBlur('currency')}
          error={formik.touched.currency ? formik.errors.currency : ''}
          placeholder='Selecione'
        >
          {Object.entries(currencies).map((item) => (
            <option key={item[0]} value={item[1]}>{item[1]}</option>
          ))}
        </Select>

        {formik.values.currency && (
          <Flex my='12px' flexDirection={['column', 'column', 'row']}>
            <div>
              <Text mb='12px' {...theme.typography.mdBold}>Valor da nota / cupom *</Text>
              <Input
                name='receiptValue'
                type='number'
                value={formik.values.receiptValue}
                onChange={formik.handleChange('receiptValue')}
                onBlur={formik.handleBlur('receiptValue')}
                error={formik.touched.receiptValue ? formik.errors.receiptValue : ''}
                placeholder='Ex: 120'
              />
            </div>
            <Box mt={['12px', '12px', 0]} ml={[0, 0, '45px']}>
              <Text mb='12px' {...theme.typography.mdBold}>Valor a ser considerado *</Text>
              <Input
                name='consideredReceiptValue'
                type='number'
                value={formik.values.consideredReceiptValue}
                onChange={formik.handleChange('consideredReceiptValue')}
                onBlur={formik.handleBlur('consideredReceiptValue')}
                error={formik.touched.consideredReceiptValue ? formik.errors.consideredReceiptValue : ''}
                placeholder='Ex: 120'
              />
            </Box>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

AddExpenseForm.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default AddExpenseForm;
