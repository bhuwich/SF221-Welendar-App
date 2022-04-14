import React , { useState } from 'react'
import { Text, Input, Box} from 'native-base'

const EventTextFiled = () => {
    const [value, setValue] = useState("");
    const handleChange = text => setValue(text);

    return(
        <Box marginBottom={"2"}>
            <Text paddingBottom={"2"} ml={"1"}>Event name</Text>
            <Input value = {value} onChangeText={handleChange} borderRadius={"10"} placeholder ='title' />
        </Box>
    )
}

const NoteTextFiled = () => {
    const [value, setValue] = useState("");
    const handleChange = text => setValue(text);
    return(
        <Box marginBottom={"2"}>
            <Text paddingBottom={"2"} ml={"1"}>Note</Text>
            <Input value = {value} onChangeText={handleChange} multiline h={"110"}  textAlignVertical={"top"} borderRadius={"10"} placeholder = 'writing something to remind...'/>
        </Box>
    )
}

export {
    EventTextFiled,
    NoteTextFiled,
}