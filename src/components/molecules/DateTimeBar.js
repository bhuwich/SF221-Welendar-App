import React, { useState,useEffect } from 'react'
import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button, Box, Input, FormControl, Text, Pressable } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from "../style/styDateTimebar";
import style from "../style/styleTextField"
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";


const DateTimebar = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState();
    const [textTime, setTextTime] = useState("--:--");

    const onChange = async(event, selectedDate) => {

        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + (parseInt(tempDate.getMonth())+1) + "/" + tempDate.getFullYear()
        let fTime = moment(tempDate).format('LT');
        setTextDate(fDate);
        setTextTime(fTime);
    }

    useEffect(()=>{
        async function fectData(){
            await AsyncStorage.setItem('keyDate',JSON.stringify(textDate));
            await AsyncStorage.setItem('keyTime',JSON.stringify(textTime));

        }
        fectData();
    })



    const showMode = (currntMode) => {
        setShow(true);
        setMode(currntMode);
    }

    return(
      <Box>
          <Text style = {style.header}>Date</Text>
          <FormControl isDisabled>
              <Box style = {style.Box} flexDirection="row">
                  <Input defaultValue={textDate} height = {10} width = {"85%"} />
                  <Button style = {styles.button} onPress={() => showMode("date")}>
                      <EvilIcons name = "calendar" size={20} color={"#FFFFFF"} />
                  </Button>
              </Box>
          </FormControl>

          <FormControl isDisabled style = {styles.timeBox}>
              <Text style = {style.header}>Time</Text>
              <Pressable onPress={() => showMode("time")}>
                  <Input defaultValue={textTime} height = {10}/>
              </Pressable>
          </FormControl>

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              display='default'
              onChange={onChange}
            />)}
      </Box>
    )
}

export default DateTimebar
