import { Button, Flex } from '@chakra-ui/react';

import theme from '../../theme/theme';

const ActionBar = () => (
  <Flex
    mt={['24px', '24px', '58px']}
    mb={['24px', '24px', '24px', '24px', 0]}
    ml={['-16px', '-16px', '-28px']}
    mr={['-16px', '-16px', '-54px']}
    p='24px 48px'
    alignItems='center'
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
    bg={theme.colors.white}
  >
    <Button
      variant='outline'
      borderColor={theme.colors.red2}
      color={theme.colors.red2}
      w={['100%', '100%', 'fit-content']}
      // eslint-disable-next-line no-console
      onClick={() => console.log('Cancelar solicitação')}
    >
      Cancelar Solicitação
    </Button>
    <Flex
      mt={['16px', '16px', 0]}
      alignItems='center'
      justifyContent='center'
      flexDirection={['column', 'column', 'row']}
      w={['100%', '100%', 'fit-content']}
    >
      <Button
        variant='outline'
        borderColor={theme.colors.green4}
        color={theme.colors.green9}
        w={['100%', '100%', 'fit-content']}
        // eslint-disable-next-line no-console
        onClick={() => console.log('Continuar depois')}
      >
        Continuar depois
      </Button>
      <Button
        mt={['16px', '16px', 0]}
        ml={[0, 0, '24px']}
        w={['100%', '100%', 'fit-content']}
        // eslint-disable-next-line no-console
        onClick={() => console.log('Enviar para aprovação')}
      >
        Enviar para aprovação
      </Button>
    </Flex>
  </Flex>
);

export default ActionBar;
