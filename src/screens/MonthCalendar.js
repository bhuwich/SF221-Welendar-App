import React, { useEffect, useState } from "react";
import {Box, HStack, IconButton, ScrollView,Fab} from "native-base";
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign  from "react-native-vector-icons/AntDesign"

import EventList from "../components/organism/EventList";
import Month from "../components/organism/Month";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MonthCalendar = ({navigation}) => {
  const [dataList,setDataList] = useState([]);
  const [isFecth,setIsFecth] = useState(false);



  useEffect(()=>{
    fectData();
  }, [dataList]);

  const fectData= async () => {
    if (!isFecth) {
      const dataNote = await AsyncStorage.getItem('fliterData');
      setDataList(JSON.parse(dataNote));
      console.log(dataList);
      setIsFecth(true);
    }
  }

    return (
        <Box>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <Box style={styles.Navbarcontainer} >
                    <HStack space={3} alignContent="space-between" px={3} pt={3}>
                        <IconButton icon={<Icon name="md-menu-sharp" size={30}/>}
                                    onPress={() => navigation.openDrawer()}/>
                    </HStack>
                    <Month/>
                </Box>
                    <EventList/>
            </ScrollView>
            <Fab renderInPortal={false} shadow={2} bottom={10}
                 placement="bottom-right"
                 colorScheme={'orange'}
                 size="sm"
                 icon={<Icon color={'white'} name="md-add-sharp" size={25}/>}
                 onPress={() => navigation.navigate('Create')}
            />
        </Box>
    );
}

const styles = StyleSheet.create({
    Navbarcontainer: {
        backgroundColor: '#FFFFFF',
    },
});

export default MonthCalendar;
