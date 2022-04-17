import {Box, HStack, IconButton} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";
import React from "react";
import Year from "../components/organism/Year";

const YearCalendar = ({navigation}) => {
    return (
        <Box style={styles.Navbarcontainer} >
            <HStack space={3} alignContent="space-between" px={3} pt={3}>
                <IconButton icon={<Icon name="md-menu-sharp" size={30}/>}
                            onPress={() => navigation.openDrawer()}/>
            </HStack>
            <Year/>
        </Box>
    );
}

const styles = StyleSheet.create({
    Navbarcontainer: {
        backgroundColor: '#FFFFFF',
    },
});

export default YearCalendar;
