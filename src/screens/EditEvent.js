import React, { useState } from 'react'
import {} from 'react-native'
import { Text, Select, Stack, Box } from 'native-base'
import {
    EventTextFiled,
    NoteTextFiled
} from '../components/atoms/TextField'
import {
    CancelButton,
    SaveButton,
} from '../components/atoms/ButtonStandard'
import DateTimebar from '../components/molecules/DateTimebar'
import styles from '../style/styleEvent'

const EditEvent = () => {
    const [service, setService] = useState("a")

    return(
            <Stack style = {styles.stack}>
                <Text style ={styles.header}>EditEvent</Text>
                <EventTextFiled/>
                <DateTimebar/>
                <Text style = {styles.text}>Location</Text>
                <Box style = {styles.selector}>
                <Select selectedValue={service} borderRadius={"10"} onValueChange={itemValue => setService(itemValue)} >
                    <Select.Item label='Option1' value = "a"/>
                    <Select.Item label='Option2' value = "b"/>
                    <Select.Item label='Option3' value = "c"/>
                </Select>
                </Box>
                <NoteTextFiled/>
                <Box style = {styles.boxBtn}>
                    <CancelButton />
                    <SaveButton />
                </Box>
            </Stack>
                
    )
}
export default EditEvent