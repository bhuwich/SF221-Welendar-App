import {Box, HStack, IconButton,ScrollView} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";
import React from "react";
import Week from "../components/organism/Week";

const WeekCalendar = ({navigation}) => {
    return (
        
        <Box style={styles.Navbarcontainer} >
            <HStack space={3} alignContent="space-between" px={3} pt={3}>
                <IconButton icon={<Icon name="md-menu-sharp" size={30}/>}
                            onPress={() => navigation.openDrawer()}/>
            </HStack>
            <Week/>
        </Box>
    );
}

const styles = StyleSheet.create({
    Navbarcontainer: {
        backgroundColor: '#FFFFFF',
        height:1000,
    },
});

export default WeekCalendar;
