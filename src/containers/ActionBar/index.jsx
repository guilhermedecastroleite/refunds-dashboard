import { Button, Flex } from '@chakra-ui/react';

import theme from '../../theme/theme';

const ActionBar = () => (
  <Flex
    mt={['24px', '24px', '58px']}
    mb={['24px', '24px', '24px', '24px', 0]}
    ml='-28px'
    mr='-54px'
    p='24px 48px'
    alignItems='center'
    justifyContent='space-between'
    bg={theme.colors.white}
  >
    <Button
      variant='outline'
      borderColor={theme.colors.red2}
      color={theme.colors.red2}
    >
      Cancelar Solicitação
    </Button>
    <Flex alignItems='center' justifyContent='center'>
      <Button
        variant='outline'
        borderColor={theme.colors.green4}
        color={theme.colors.green9}
      >
        Continuar depois
      </Button>
      <Button ml='24px'>Enviar para aprovação</Button>
    </Flex>
  </Flex>
);

export default ActionBar;
