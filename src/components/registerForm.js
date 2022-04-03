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
    Icon,
    Avatar
} from 'native-base';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RegisterForm = () => {
    const [show, setShow] = React.useState(false);
    const [showcomfirm,setShowcomfirm] = React.useState(false);
    return (
        <Center
            w="100%"
            bg="orange.50"
            borderTopLeftRadius="40"
            borderTopRightRadius="40"
            mt="30">
            <Box safeArea p="2" pt={25} w="100%" maxW="350" height="600" >
                <Heading
                    size="xl"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                        color: 'warmGray.50',
                    }}>
                    Sign Up
                    
                </Heading>
                <Box m={4}>
                    <Flex  alignItems="center">
                        <Avatar bg="violet.400" source={{
                            uri: "https://imgz.io/images/2022/03/29/Ellipse-86.png"}}
                                size="xl"
                        >
                        </Avatar>
                    </Flex>
                </Box>
                <VStack space={5} mt="0">
                    <FormControl>
                        <Input pl={4} placeholder="๊Username" bg="white" />
                    </FormControl>
                    <FormControl>
                        <Input pl={4} type="Email" bg="white" placeholder="Email" />
                    </FormControl>
                    <FormControl>
                        <Input
                            pl={4}
                            type={show ? "text" : "password"}
                            bg="white"
                            InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                                                     size={5} mr="4"
                                                     color="muted.400"
                                                     onPress={() => setShow(!show)} />} placeholder="Password" />
                    </FormControl>
                    <FormControl>
                        <Input type={showcomfirm ? "text" : "password"}
                               pl={4}
                               bg="white"
                               InputRightElement={<Icon as={<MaterialIcons name={showcomfirm? "visibility" : "visibility-off"} />}
                                                        size={5} mr="4"
                                                        color="muted.400"
                                                        onPress={() => setShowcomfirm(!showcomfirm)} />} placeholder="Password" />
                    </FormControl>
                    <Button mt="2" colorScheme="danger">
                        Continue
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: 'warmGray.200',
                            }}>
                            If you have account ?{' '}
                        </Text>
                        <Link
                            _text={{
                                color: 'warning.600',
                                fontWeight: 'medium',
                                fontSize: 'sm',
                            }}
                            href="#">
                            Login
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default RegisterForm;