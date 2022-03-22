import React from 'react';

import {
    Box,
    VStack,
    Image,
    Center,
    Text,
    NativeBaseProvider,
} from 'native-base';

const Example = () => {
    return (
        <Box>
            <VStack space={1} alignItems="center">
                <Image
                    source={{
                        uri: 'https://imgz.io/images/2022/03/21/logomain.png',
                    }}
                    alt="Alternate Text"
                    size="2xl"
                />
            </VStack>
        </Box>
    );
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3" bg="orange.400">
                <Example />
            </Center>
        </NativeBaseProvider>
    );
};
