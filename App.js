import React from 'react';
import {Box, Center, NativeBaseProvider} from 'native-base';

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
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
      </Center>
    </NativeBaseProvider>
  );
};
