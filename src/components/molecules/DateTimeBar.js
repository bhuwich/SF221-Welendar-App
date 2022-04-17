import React, { useState } from 'react'
import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Button, Box, Input, FormControl, Text, Pressable } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from "../style/styleDateTimebar"

const DateTimebar = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textDate, setTextDate] = useState("DD/MM/YYYY");
    const [textTime, setTextTime] = useState("--:--")

    const onChange = (selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + tempDate.getMonth() + "/" + tempDate.getFullYear()
        let fTime = tempDate.getHours() + ":" + tempDate.getMinutes()
        setTextDate(fDate);
        setTextTime(fTime);

    }
    const showMode = (currntMode) => {
        setShow(true);
        setMode(currntMode);
    }

    return(
        <Box>
            <Text style = {styles.header}>Date</Text>
            <FormControl isDisabled>
                <Box style = {styles.box}>
                    <Input defaultValue={textDate} height = {10} width = {"85%"} />
                    <Button style = {styles.button} onPress={() => showMode("date")}>
                        <EvilIcons name = "calendar" size={20} color={"#FFFFFF"} />
                    </Button>
                </Box>
            </FormControl>

            <FormControl isDisabled style = {styles.timeBox}>
                <Text style = {styles.header}>Time</Text>
                <Pressable onPress={() => showMode("time")}>
                    <Input heidefaultValue={textTime} height = {10}/>
                </Pressable>
            </FormControl>

            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />)}
        </Box>
    )
}

export default DateTimebar
