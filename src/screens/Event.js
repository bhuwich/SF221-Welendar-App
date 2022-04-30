import React, { useEffect, useState } from "react";
import {
    Heading,
    Box,
    FlatList,
    Center,
    ScrollView,
    HStack,
    IconButton,
    Pressable,
    Button,
    Skeleton,
    Text, Spacer,
} from "native-base";
import EventField from "../components/molecules/EventField";
import FlatlistTest from '../screens/FlatlistTest';
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";


const EventScreen= ({navigation})=> {
    const dateNow = moment(new Date()).format('ll');
    const [dataList,setDataList] = useState([]);
    const [isFecth,setIsFecth] = useState(false);
    const now = moment(new Date()).format('DD/M/YYYY');
    const [list,setList] = useState([]);





    useEffect(()=>{
        fectData();
    }, [dataList]);

    const fectData= async () =>{
        if(!isFecth){
            const dataNote = await AsyncStorage.getItem('dataArray');
            setDataList(JSON.parse(dataNote));
            console.log(dataList);
            setIsFecth(true);
            todayTask();
        }


        // await setToken(JSON.parse(res));

    }

    const todayTask = async ()=> {
        const totalLength = dataList.length;
        setList([]);
        for(let i =0; i<totalLength; i++){
            if(dataList[i].dateSave=== now){
                console.log("hasTask");
                list.push(dataList[i]);

            }else{
                console.log("No Task");



            }
        }

        console.log("List =" +JSON.stringify(list));
        await AsyncStorage.setItem('fliterData',JSON.stringify(list));





    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:'#ffffff',
        },
        HeadingText:{
            justifyContent:"center",
            alignItems:"stretch",
            marginTop:10,
            marginBottom:20,
        }
    });



    return (
      <ScrollView>
          <Center style={styles.container}>


              <Box py={5}>
                  <Box style={styles.HeadingText}>
                      <HStack>
                          <IconButton icon={<Icon name="md-menu-sharp" size={30}/>}
                                      onPress={() => navigation.openDrawer()}/>
                          <Heading size="lg" ml={60} mt={2} fontStyle={'#767676'}>April 2022</Heading>
                      </HStack></Box>
                  <Heading size="xs">{dateNow}</Heading>
                      <Pressable isPressed={() => navigation.openDrawer()}>


                      </Pressable>
                  <FlatlistTest data={list}>

                  </FlatlistTest>




              </Box>
          </Center>
      </ScrollView>
    );
}


export default EventScreen
