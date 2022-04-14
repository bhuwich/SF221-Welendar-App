import React from 'react'
import { IconButton, Box, Center, NativeBaseProvider ,Left} from "native-base";
import Icon from 'react-native-vector-icons/Ionicons.js';

const Calendar = ({navigation}) => {
    return (
        <Box width='20' height='16' alignItems='center'>
            <IconButton icon={<Icon name="md-menu-sharp" size={30}/>} borderRadius="full"
                        onPress={() => navigation.openDrawer()}
            />
        </Box>
    )
}
export default Calendar;
