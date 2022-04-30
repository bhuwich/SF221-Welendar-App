import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box, Image,NativeBaseProvider } from 'native-base';
import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import {LogBox } from 'react-native';
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
LogBox.ignoreLogs(['Reanimated 2']);

const ImageLogo = './src/assets/Images/mainlogo.png';

const App = () => {
    const [align, setAlign] = useState('center');
    const [alignsecond, setAlignsecond] = useState(false);

    setTimeout(() => {
        setAlign('flex-start'), setAlignsecond(true);
    }, 3000);

    const [token,setToken] =useState();

    useEffect(()=>{
        async function fectData(){
            const res = await AsyncStorage.getItem('@storage_key');
            const resAll = await AsyncStorage.getAllKeys();
            console.log("Fetch Data Successfully =>"+JSON.parse(res));
            await setToken(JSON.parse(res));
            console.log("Data in AsynStorage =>"+resAll);
            console.log("Set State Successfully from AsynStorage =>" + token);
            return res;
        }
        fectData();
    })

    return (
        <NavigationContainer>
            <NativeBaseProvider>
                    {!alignsecond ? <Box style={[styles.container, { justifyContent: align }]} background="#FF975C">
                <Image source={require(ImageLogo)} alt="Main Logo Welendar"
                                   style={{ width:170, height: 170}}/>
                </Box>: <AppStack token={token}/>}
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
