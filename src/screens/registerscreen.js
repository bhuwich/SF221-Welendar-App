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
} from 'native-base';

const theme = extendTheme({
    fontConfig: {
        Prompt: {
            100: {
                normal: 'Prompt-Light',
                italic: 'Prompt-LightItalic',
            },
            200: {
                normal: 'Prompt-Light',
                italic: 'Prompt-LightItalic',
            },
            300: {
                normal: 'Prompt-Light',
                italic: 'Prompt-LightItalic',
            },
            400: {
                normal: 'Prompt-Regular',
                italic: 'Prompt-Italic',
            },
            500: {
                normal: 'Prompt-Medium',
            },
            600: {
                normal: 'Prompt-Medium',
                italic: 'Prompt-MediumItalic',
            },
        },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
        heading: 'Prompt',
        body: 'Prompt',
        mono: 'Prompt',
    },
});
const LoginScreen = () => {
    return (
        <Center
            w="100%"
            bg="orange.50"
            borderTopLeftRadius="40"
            borderTopRightRadius="40"
            mt="30">
            <Box safeArea p="2" py="12" w="100%" maxW="350" height="500">
                <Heading
                    size="xl"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                        color: 'warmGray.50',
                    }}>
                    ยินดีต้อนรับ
                </Heading>
                <Heading
                    mt="0"
                    _dark={{
                        color: 'warmGray.200',
                    }}
                    color="coolGray.600"
                    fontWeight="medium"
                    size="xs"
                />

                <VStack space={5} mt="5">
                    <FormControl>
                        <Input placeholder=" อีเมล " bg="white" />
                    </FormControl>
                    <FormControl>
                        <Input type="password" bg="white" placeholder="  รหัสผ่าน " />
                        <Link
                            _text={{
                                fontSize: 'xs',
                                fontWeight: '500',
                                color: 'warning.600',
                            }}
                            alignSelf="flex-end"
                            mt="1">
                            หากคุณลืมรหัสผ่าน ?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="danger" color="coolGray.600">
                        ดำเนินการต่อ
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: 'warmGray.200',
                            }}>
                            ถ้าคุณยังไม่มีบัญชี ? .{' '}
                        </Text>
                        <Link
                            _text={{
                                color: 'warning.600',
                                fontWeight: 'medium',
                                fontSize: 'sm',
                            }}
                            href="#">
                            ลงทะเบียนใช้งาน
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};
export default () => {
    return (
        <NativeBaseProvider theme={theme}>
            <Center flex={1} bg="orange.400" py="0">
                <Box pt="5" pb="5" mt="20">
                    <Image
                        source={{
                            uri: 'https://imgz.io/images/2022/03/21/logomain.png',
                        }}
                        alt="Alternate Text"
                        size="150"
                    />
                </Box>
                <LoginScreen />
            </Center>
        </NativeBaseProvider>
    );
};
