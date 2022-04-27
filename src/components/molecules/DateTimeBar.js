import React, { useState } from 'react'
import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button, Box, Input, FormControl, Text, Pressable } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from "../style/styDateTimebar"
import moment from "moment";

const DateTimebar = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState("DD/MM/YYYY");
    const [textTime, setTextTime] = useState("--:--")

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = moment(tempDate).format('ll');
        let fTime = moment(tempDate).format('LT');
        setTextDate(fDate);
        setTextTime(fTime);

    }
    const showMode = (currntMode) => {
        setShow(true);
        setMode(currntMode);
    }

    return(
        <>
            <FormControl isDisabled>
                <FormControl.Label>Date</FormControl.Label>
                <Box style = {styles.dateBox}>
                    <Input defaultValue={textDate} height = {10} width = {"87%"} />
                    <Button style = {styles.button} onPress={() => showMode("date")}>
                        <EvilIcons name = "calendar" size={20} color={"#FFFFFF"} />
                    </Button>
                </Box>
            </FormControl>

            <FormControl isDisabled style = {styles.timeBox}>
                <FormControl.Label>Time</FormControl.Label>
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
        </>
    )
}

export default DateTimebar
