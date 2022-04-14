import React, { useState } from 'react'
import {} from 'react-native'
import { Text, Select, Stack, Box } from 'native-base'
import {
    EventTextFiled,
    NoteTextFiled
} from '../components/atoms/TextFiled'
import {
    CancelButton,
    SaveButton,
} from '../components/atoms/ButtonStandard'

const EditEvent = () => {
    const [service, setService] = useState("a")

    return(
            <Stack space={"3"} marginTop={"8"}>
                <Text textAlign={"center"} padding ={"6"} fontSize={"25"} bold>April 2022</Text>
                <EventTextFiled/>
                <Text ml={"1"} >Location</Text>
                <Select selectedValue={service} borderRadius={"10"} onValueChange={itemValue => setService(itemValue)} >
                    <Select.Item label='Option1' value = "a"/>
                    <Select.Item label='Option2' value = "b"/>
                    <Select.Item label='Option3' value = "c"/>
                </Select>
                <NoteTextFiled/>
                <Box flexDirection={"row"} marginTop={"50%"} justifyContent={"space-between"}>
                    <CancelButton />
                    <SaveButton />
                </Box>
            </Stack>
                
    )
}
export default EditEvent