import React, { useEffect, useState } from "react";
import { Text, Box, VStack, IconButton, Heading, ScrollView, Button, Center, Divider, Image} from 'native-base'
import {StyleSheet} from "react-native";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import EventList from "../components/organism/EventList";




const EventDetail = ({navigation}) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');
    const [event, setEvent] = useState('');
    const [dataList, setDataList] = useState([]);





    let dataSave= {
        "eventSave":event,
        "dateSave": date,
        "timeSave": time,
        "noteSave": note
    };


    const onPush= async () =>{
        console.log(dataList);
        console.log('this is List');
        dataList.push(dataSave);
        console.log(dataList);
        await AsyncStorage.setItem('dataArray',JSON.stringify(dataList));
        navigation.navigate('RootDrawer')


    }







    useEffect(()=> {
        async function fectData() {
            const dataDate = await AsyncStorage.getItem('keyDate');
            setDate(JSON.parse(dataDate));
            const dataTime = await AsyncStorage.getItem('keyTime');
            setTime(JSON.parse(dataTime));
            const dataEvent = await AsyncStorage.getItem('keyEvent');
            setEvent(JSON.parse(dataEvent));
            const dataNote = await AsyncStorage.getItem('keyNote');
            setNote(JSON.parse(dataNote));
            const globalList = await AsyncStorage.getItem('dataArray');
            console.log("this is globalList " +globalList);
            if (globalList !== null) {
                console.log("set globalList success")
                setDataList(JSON.parse(globalList));
            }


            // await setToken(JSON.parse(res));
            console.log("This event detail");
            console.log("Event = " + JSON.parse(dataEvent));
            console.log("Date = " + JSON.parse(dataTime));
            console.log("Time = " + JSON.parse(dataTime));
            console.log("Note = " + JSON.parse(dataNote));
            console.log("DataList = " + JSON.parse(globalList));



        }

        fectData();



    } ,[])
    return(
        <ScrollView>
            <Box flex={1} py={5} px={5}>


                <VStack space="5">
                    <Center mt="7">
                        <Heading> Event Detail</Heading>
                    </Center>
                    <Box mt="7" alignItems="center" shadow={2}>
                        <Divider my={3} mx={2} backgroundColor="#000000"/>
                        <Image size={100} resizeMode={"contain"}  margin="5" source={{
                            uri: "https://cdn4.iconfinder.com/data/icons/scrum-process-1/64/time-estimate-evaluation-task-performance-512.png"
                        }} alt="Alternate Text" />
                        <Box flexDirection={"row"} justifyContent="space-between">
                            <Box marginRight="55%">
                                <Text>{dataSave.dateSave}</Text>
                            </Box>
                            <Text>{dataSave.timeSave}</Text>
                        </Box>
                    </Box>
                    <Box mr="6" ml="6">
                        <Text bold fontSize="24">{dataSave.eventSave}</Text>
                    </Box>
                    <Box mr="7" ml="6" >
                        <Text fontSize="18">{dataSave.noteSave}</Text>
                    </Box>
                    <Divider my={3} backgroundColor="#000000"/>
                    <Box>
                        <Button  onPress={() => onPush()} colorScheme={'warning'}>
                            Save
                        </Button>
                        <Button ariant="subtle"  onPress={() => navigation.navigate('RootDrawer')} colorScheme={'warning'} mt={5} mb={5} variant="outline">
                            Back
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    HeadingText:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        marginBottom:20,
    }
});

export default EventDetail;
