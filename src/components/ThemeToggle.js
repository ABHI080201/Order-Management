import { useColorMode, Switch, Flex, Text } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="center" marginBottom="3" marginTop="4" marginLeft="3">
      <Text marginRight="2">{colorMode === 'light' ? 'Light' : 'Dark'} Mode</Text>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </Flex>
  );
};

export default ThemeToggle;

