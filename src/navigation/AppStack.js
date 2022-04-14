import React from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer";


import Calendar from "../screens/Calendar";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return(
        <Drawer.Navigator useLegacyImplementation drawerContent={props => <CustomDrawer{...props}/>}  screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Week" component={Calendar}/>
            <Drawer.Screen name="Month" component={Calendar}/>
            <Drawer.Screen name="Year" component={Calendar}/>
            <Drawer.Screen name="Activities" component={Calendar}/>
        </Drawer.Navigator>
    );
};

export default AppStack;

