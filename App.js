import React from 'react';
import {Box, Center, NativeBaseProvider} from 'native-base';
import AddingPlan from './src/screens/AddingPlan';
import EditEvent from './src/screens/EditEvent';

export default () => {
  return (
    <NativeBaseProvider  bgColor={"#FFFFFF"}>
        <Box maxWidth={"80"} marginLeft={"8"}>
         <EditEvent/>
        </Box>
    </NativeBaseProvider>
  );
};
