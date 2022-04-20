import React, { useEffect, useState } from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import { AsyncStorage } from "react-native";
import CustomDrawer from "./CustomDrawer";
import AppWelcome from "../screens/GetStarted";
import YearCalendar from "../screens/YearCalendar";
import WeekCalendar from "../screens/WeekCalendar";
import MonthCalendar from "../screens/MonthCalendar";
import Event from "../screens/Event";
import AddingPlan from "../screens/AddingPlan";
import EventDetail from "../screens/EventDetail";
import EditEvent from "../screens/EditEvent";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const RootDrawerNavigator = () => {
    return(
        <Drawer.Navigator useLegacyImplementation drawerContent={ (props) =><CustomDrawer{...props}/>}  screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Week" component={WeekCalendar}/>
            <Drawer.Screen name="Month" component={MonthCalendar}/>
            <Drawer.Screen name="Year" component={YearCalendar}/>
            <Drawer.Screen name="Activities" component={Event}/>
            <Drawer.Screen name="Create" component={CreateEvent}/>
        </Drawer.Navigator>
    );
};

const CreateEvent  = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CreateEvent' component={AddingPlan} />
            <Stack.Screen name='RootDrawer' component={RootDrawerNavigator} />
            <Stack.Screen name='EventStack' component={EventStack} />
        </Stack.Navigator>
    );
}

const EventStack  = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CreateEvent' component={EventDetail} />
            <Stack.Screen name='EditEvent' component={EditEvent} />
        </Stack.Navigator>
    );
}

const RootStack = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={props.token !== false ? 'Welcome' : 'Main'}>
            <Stack.Screen name='Welcome' component={AppWelcome} />
            <Stack.Screen name='Main' component={RootDrawerNavigator} />
        </Stack.Navigator>
    );
}

export default RootStack;
