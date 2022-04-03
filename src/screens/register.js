import * as React from 'react';
import {
    Flex,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Center,
    Image,
    extendTheme,
    NativeBaseProvider,
    Icon,
    Avatar
} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import RegisterForm from '../components/registerForm';

export default () => {
    return (
        <NativeBaseProvider >
            <Center flex={1} bg="orange.400" pt={120}>
               <RegisterForm/>
            </Center>
        </NativeBaseProvider>
    );
};
