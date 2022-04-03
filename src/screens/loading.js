import React from 'react';

import {
    Box,
    VStack,
    Image,
    Center,
    Text,
    NativeBaseProvider,
} from 'native-base';

import GetStart from '../components/gettingStart';

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3" bg="orange.400">
                <GetStart />
            </Center>
        </NativeBaseProvider>
    );
};
