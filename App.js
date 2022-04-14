import React from 'react';
import {NativeBaseProvider,} from 'native-base';

import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import Splash from "./src/screens/Splash";
import AlertConfirm from "./src/components/molecules/AlertConfirm";


export default () => {
  return (
      <NavigationContainer>
        <NativeBaseProvider>
            <AppStack/>
        </NativeBaseProvider>
      </NavigationContainer>
  );
}

