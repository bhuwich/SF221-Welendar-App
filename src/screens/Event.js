import * as React from 'react';
import {Heading, Box, Fab, Container, Center, ScrollView, HStack, IconButton, Pressable} from 'native-base';
import EventField from "../components/molecules/EventField";
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    HeadingText:{
        justifyContent:"center",
        alignItems:"stretch",
        marginTop:10,
        marginBottom:20,
    }
});

export default function EventScreen({navigation}){
    return (
        <ScrollView>
            <Center style={styles.container}>


                <Box py={5}>
                    <Box style={styles.HeadingText}>
                        <HStack>
                            <IconButton icon={<Icon name="md-menu-sharp" size={30}/>}
                                        onPress={() => navigation.openDrawer()}/>
                            <Heading size="lg" ml={60} mt={2} fontStyle={'#767676'}>April 2022</Heading>
                        </HStack></Box>
                    <Heading size="xs">15 April 2022</Heading>
                    <Pressable isPressed={() => navigation.openDrawer()}>
                        <EventField/>
                        <EventField/>
                        <EventField/>
                        <EventField/>
                        <EventField/>
                        <EventField/>
                        <EventField/>
                    </Pressable>
                </Box>
            </Center>
        </ScrollView>
    );
}
