import React, { useEffect, useState } from "react";
import { Text, Box, VStack, IconButton, Heading, ScrollView, Button} from 'native-base'
import {StyleSheet} from "react-native";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
import EventList from "../components/organism/EventList";



const EventDetail = ({navigation}) => {
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');
    const [event, setEvent] = useState('');
    const [dataList, setDataList] = useState([]);
    const [isFecth,setIsFecth] = useState(false);




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
            <Button ariant="subtle"  onPress={() => navigation.navigate('RootDrawer')} colorScheme={'warning'} mt={5} mb={5} variant="outline">
                Back
            </Button>

            <VStack>
                <Text>
                    {dataSave.dateSave} time: {dataSave.timeSave}
                </Text>
                <Text>
                    {dataSave.eventSave}
                </Text>
                <Text>
                    {dataSave.noteSave}
                </Text>
                <Box>
                    <Button  onPress={() => onPush()} colorScheme={'warning'} mt={5} mb={5}>
                        Save
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
        alignItems:"stretch",
        marginTop:10,
        marginBottom:20,
    }
});

export default EventDetail;
