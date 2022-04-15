import React , { useState } from 'react'
import { Text, Input, Box, TextArea} from 'native-base'
import styles from "../style/styleTextField"

const EventTextFiled = () => {
    const [value, setValue] = useState("");
    const handleChange = text => setValue(text);

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