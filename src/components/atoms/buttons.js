import React, { useState } from "react";
import { Center, Button, Box, Actionsheet, Text, useDisclose } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "../style/styleButtons"
import styleText from "../style/styleText";


//Repeat button
function Repeatbtn() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose()
  
  return (
    <Center>
      <Button onPress={onOpen} style = {styles.btnRepeat}>
        <Text style = {styleText.btnText}>None</Text>
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Repeat
            </Text>
          </Box>
          <Actionsheet.Item>None</Actionsheet.Item>
          <Actionsheet.Item>Everyday</Actionsheet.Item>
          <Actionsheet.Item>Every week</Actionsheet.Item>
          <Actionsheet.Item>Every month</Actionsheet.Item>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Every selected day
            </Text>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  )
}


//Priority button
function Prioritybtn() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose()
  return (
    <Center>
      <Button onPress={onOpen} style = {styles.btnPriority}>
        <Text style = {styleText.btnText}>None</Text>
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Priority
            </Text>
          </Box>
          <Actionsheet.Item>None</Actionsheet.Item>
          <Actionsheet.Item>Low</Actionsheet.Item>
          <Actionsheet.Item>Medium</Actionsheet.Item>
          <Actionsheet.Item>High</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  )
}


//Date selector button
function Datebtn () {
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // }

  return (
    <>
      <Button style = {styles.btnDate}>
      <EvilIcons name= "calendar" size={32} color = "black"/>
    </Button>

    {/* {show && (
      <DateTimePicker
      value={new Date()}
      mode={mode}
      is24Hour={true}
      display='calendar'/>
    )} */}
    </>
    
  )
}


//Time selector button
function Timebtn () {
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // }

  return (
    <>
      <Button style = {styles.btnTime}>
      <Fontisto name= "clock" size={20} color = "black"/>
    </Button>

    {/* {show && (
      <DateTimePicker
      value={new Date()}
      mode={"time"}
      is24Hour={true}
      display='clock'/>
    )} */}
    </>
    
  )
}


//Submit button
function Submitbtn () {
    return (
      <Button style = {styles.btnSubmit}>
        <Text color= "white"
        style = {styleText.btnText}>Submit</Text>
      </Button>
    )
}


export {
  Repeatbtn,
  Prioritybtn,
  Datebtn,
  Timebtn,
  Submitbtn
};