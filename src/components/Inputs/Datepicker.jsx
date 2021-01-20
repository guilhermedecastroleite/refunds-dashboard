import PropTypes from 'prop-types';
import Datepicker from 'react-datepicker';
import {
  Box, Button, Flex, Icon, Text,
} from '@chakra-ui/react';
import { FaRegCalendar } from 'react-icons/fa';

import './Datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';

import theme from '../../theme/theme';

const CustomInput = ({ value, onClick }) => (
  <Button
    w='100%'
    variant='outline'
    onClick={onClick}
    bg={theme.colors.white}
    color={theme.colors.gray4}
    borderColor={theme.colors.gray12}
    justifyContent='flex-start'
    leftIcon={(
      <Flex
        w='38px'
        h='36px'
        ml='-16px'
        bg={theme.colors.gray12}
        alignItems='center'
        justifyContent='center'
        borderRadius='0.375rem 0 0 0.375rem'
      >
        <Icon as={FaRegCalendar} />
      </Flex>
    )}
  >
    <Box pl='4px'>
      {value || 'Selecione uma data'}
    </Box>
  </Button>
);

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

CustomInput.defaultProps = {
  value: '',
  onClick: null,
};

const CustomDatepicker = ({ error, ...props }) => (
  <>
    <Datepicker
      dateFormat='dd/MM/yyyy'
      customInput={<CustomInput />}
      {...props}
    />
    {error && (
      <Text {...theme.typography.xs} color={theme.colors.red2}>
        {error}
      </Text>
    )}
  </>
);

CustomDatepicker.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default CustomDatepicker;
