import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppWelcome from "./src/screens/GetStarted";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Center ,Box ,Text,NativeBaseProvider,Button} from "native-base";
const Stack = createStackNavigator();
const App = () => {

  return(
  <NativeBaseProvider>
    <Center flex={1} px="3">
      <Box alignItems="center">
        <Text>
          Welcome a new user
        </Text>
        {token ? <Button
          onPress={() => {{Clear}}}> logout </Button> : <Button > login </Button>
        }
      </Box>;
    </Center>
</NativeBaseProvider>
  );
}



export default App;
