import React from 'react'
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    Box,
    Pressable,
    VStack,
    Text,
    HStack,
    Divider,
    Image, Button,Switch,
} from "native-base";
import Icon1 from "react-native-vector-icons/AntDesign";


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} safeArea>
            <VStack space="6" my="2" mx="1">
                <Box  alignSelf="center" width="50" height="90">
                    <Image source={{
                        uri: "https://sv1.picz.in.th/images/2022/04/14/8sDovv.png"
                    }} alt="Alternate Text" size="2xl"/>
                </Box>
                <VStack divider={<Divider />} space="4">
                    <VStack space="3">
                        {props.state.routeNames.map((name, index) => (
                            <Pressable
                                color="#FFF9EF"
                                px="5"
                                py="3"
                                rounded="md"
                                bg={
                                    index === props.state.index
                                        ? "#FFF9EF"
                                        : "transparent"
                                }
                                onPress={(event) => {
                                    props.navigation.navigate(name);
                                }}
                            >
                                <HStack space="7" alignItems="center">
                                    <Text
                                        fontWeight="500"
                                        color={
                                            index === props.state.index ? "orange.500" : "orange.500"
                                        }
                                    >
                                        {name}
                                    </Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                </VStack>
            </VStack>

            <Box alignItems="center" mt="5">

            </Box>
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;
