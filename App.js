import React from 'react';
import {Box, Center, NativeBaseProvider} from 'native-base';

const App = () => {
  return (
      <Box
        alignSelf="center"
        bg="primary.500"
        _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          letterSpacing: 'lg',
        }}>
        This is a Box
      </Box>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <App />
      </Center>
    </NativeBaseProvider>
  );
};
