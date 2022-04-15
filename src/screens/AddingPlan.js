import React, { useState } from 'react'
import {} from 'react-native'
import { Text, Select, Stack, Box } from 'native-base'
import {
    EventTextFiled,
    NoteTextFiled
} from '../components/atoms/TextField'
import {
    SaveButton,
    CancelButton
} from '../components/atoms/ButtonStandard'
import DateTimebar from '../components/molecules/DateTimebar'
import styles from '../style/styleEvent'

const AddingPlan = () => {
    const [service, setService] = useState("a")

    return(
            <Stack style = {styles.stack}>
                <Text style ={styles.header}>Adding Plan</Text>
                <EventTextFiled/>
                <DateTimebar/>
                <Text style = {styles.text}>Location</Text>
                <Box style = {styles.selector}>
                <Select selectedValue={service} 
                onValueChange={itemValue => setService(itemValue)}>
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
export default AddingPlan