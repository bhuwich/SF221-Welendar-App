import React, { useState }from 'react'
import { Platform } from 'react-native'
import { Box, FormControl, Text, Input, Select, TextArea, Button, Pressable } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from '../style/styAdding'
import moment from "moment";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/action";


const AddingPlan = ({navigation}) => {
    const [text, setText] = useState('');
    const [content, setContent] = useState('');
    const [textDate, setTextDate] = useState("DD/MM/YYYY");
    const [textTime, setTextTime] = useState("--:--")

    const [service, setService] = useState();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

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


    const dispatch = useDispatch();

    function handleSumbit(){
        dispatch(addTodo(textDate));
        dispatch(addTodo(textTime));
        dispatch(addTodo(text));
        dispatch(addTodo(content));
        setText('');
        setContent('');
    }

    return(
        <Box style={{flex:1,padding:20}}>

        <Box style={styles.page}>
            <Text style={styles.header}>Adding Plan</Text>
            <FormControl>

                <FormControl.Label style={styles.element}>Event name</FormControl.Label>
                <Input
                placeholder="title"
                value={text}
                onChangeText={setText}
                marginBottom={2}/>
                
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
                
                <FormControl.Label style={styles.element}>Location</FormControl.Label>
                <Select 
                selectedValue={service}
                onValueChange={itemValue => setService(itemValue)}
                placeholder="location"
                marginBottom={1}>
                    <Select.Item label='Option1' value = "a"/>
                    <Select.Item label='Option2' value = "b"/>
                    <Select.Item label='Option3' value = "c"/>
                </Select>
                
                <FormControl.Label style={styles.element}>Note</FormControl.Label>
                <TextArea
                placeholder="writing something to remind"
                value={content}
                onChangeText={setContent}
                height="110"/>

            </FormControl>
        </Box>


            <Box>
                <Button  
                 onPress={() => { navigation.navigate('EventStack'); handleSumbit() }}
                 colorScheme={'warning'} mt={5} mb={5}>
                    Save
                </Button>

                <Button variant="outline" 
                 onPress={() => { navigation.navigate('RootDrawer') }} 
                 colorScheme={'warning'}>
                    Cancel
                </Button>
            </Box>
        </Box>
    )
}
export default AddingPlan
