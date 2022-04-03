import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
    NativeBaseProvider,
    Box,
    HamburgerIcon,
    Pressable,
    Heading,
    VStack,
    Text,
    Center,
    HStack,
    Divider,
    Icon,
    View,
    Button,
    extendTheme
} from "native-base";

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

const Drawer = createDrawerNavigator();


function Feed({ navigation }) {
    return (
        //<Register/>
        <View>
            <Box bg="white" h={"100%"}>

            </Box>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} safeArea>
            <VStack space="6" my="2" mx="1">
                <Box px="4">
                    <Text bold color="gray.700">
                        Mail
                    </Text>
                    <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
                        john_doe@gmail.com
                    </Text>
                </Box>
                <VStack divider={<Divider />} space="4">
                    <VStack space="3">
                        {props.state.routeNames.map((name, index) => (
                            <Pressable
                                px="5"
                                py="3"
                                rounded="md"
                                bg={
                                    index === props.state.index
                                        ? "rgba(6, 182, 212, 0.1)"
                                        : "transparent"
                                }
                                onPress={(event) => {
                                    props.navigation.navigate(name);
                                }}
                            >
                                <HStack space="7" alignItems="center">
                                    <Icon
                                        color={
                                            index === props.state.index ? "primary.500" : "gray.500"
                                        }
                                        size="5"

                                    />
                                    <Text
                                        fontWeight="500"
                                        color={
                                            index === props.state.index ? "primary.500" : "gray.700"
                                        }
                                    >
                                        {name}
                                    </Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                    <VStack space="5">
                        <VStack space="3">
                            <Button
                                size="md"
                                variant="ghost"
                                colorScheme="secondary">Logout</Button>
                        </VStack>
                    </VStack>
                </VStack>
            </VStack>
        </DrawerContentScrollView>
    );
}
function MyDrawer() {
    return (
        <Box safeArea flex={1}>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="calendar" component={Feed} />

            </Drawer.Navigator>
        </Box>
    );
}

export default () => {
    return (
        <NavigationContainer >
            <NativeBaseProvider >
                <MyDrawer />
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
