import React , { useState, useEffect} from 'react'
import { Text, Input, Box, TextArea} from 'native-base'
import styles from "../style/styleTextField"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const EventTextFiled = () => {
  const [value, setValue] = useState("");
  const handleChange = text => setValue(text);
  useEffect(()=>{
    async function fectData(){
      await AsyncStorage.setItem('keyEvent',JSON.stringify(value));
    }
    fectData();
  })

  return(
    <Box style = {styles.Box}>
      <Text style = {styles.header}>Event name</Text>
      <Input value = {value} onChangeText={handleChange} placeholder ='title'
             style = {styles.EventInput}/>
    </Box>
  )
}

const NoteTextFiled = () => {
  const [value, setValue] = useState("");
  const handleChange = text => setValue(text);
  useEffect(()=>{
    async function fectData(){
      await AsyncStorage.setItem('keyNote',JSON.stringify(value));
    }
    fectData();
  })
  return(
    <Box style = {styles.Box}>
      <Text style = {styles.header}>Note</Text>
      <TextArea value = {value} onChangeText={handleChange}
                placeholder="writing something to remind"
                style = {styles.NoteInput}/>
    </Box>
  )
}



export {
  EventTextFiled,
  NoteTextFiled,
}
