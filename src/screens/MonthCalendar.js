import React from 'react'
import {Box, HStack, IconButton, ScrollView,Fab} from "native-base";
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign  from "react-native-vector-icons/AntDesign"


import Month from "../components/organism/Month";
import EventList from "../components/organism/EventList";


const MonthCalendar = ({navigation}) => {
    return (
        <Box>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Box style={styles.Navbarcontainer} >
                    <HStack space={3} alignContent="space-between" px={3} pt={3}>
                        <IconButton icon={<Icon name="md-menu-sharp" size={30}/>}
                                    onPress={() => navigation.openDrawer()}/>
                    </HStack>
                    <Month/>
                    <EventList/>
                </Box>
            </ScrollView>
            <Fab renderInPortal={false} shadow={2} bottom={10}
                 placement="bottom-right"
                 colorScheme={'orange'}
                 size="sm"
                 icon={<Icon color={'white'} name="md-add-sharp" size={25}/>}
                 onPress={() => navigation.navigate('Create')}
            />
        </Box>
    );
}

const styles = StyleSheet.create({
    Navbarcontainer: {
        backgroundColor: '#FFFFFF',
    },
});

export default MonthCalendar;
