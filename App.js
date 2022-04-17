import React, { useState } from 'react';
import {StyleSheet} from "react-native";
import { Box, Image,NativeBaseProvider } from 'native-base';
import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const ImageLogo = './src/assets/Images/mainlogo.png';
import AddingPlan from './src/screens/AddingPlan';
import EditEvent from './src/screens/EditEvent';

const App = () => {
    const [align, setAlign] = useState('center');
    const [alignsecond, setAlignsecond] = useState(false);

    setTimeout(() => {
        setAlign('flex-start'), setAlignsecond(true);
    }, 3000);
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                    {!alignsecond ? <Box style={[styles.container, { justifyContent: align }]} background="#FF975C">
                <Image source={require(ImageLogo)} alt="Main Logo Welendar"
                                   style={{ width:170, height: 170}}/>
                </Box>: <AppStack/>}
            </NativeBaseProvider>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
});
