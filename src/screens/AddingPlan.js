import React, { useState, useEffect } from 'react'
import {} from 'react-native'
import {Text, Select, Stack, Box, Button} from 'native-base'
import {
    EventTextFiled,
    NoteTextFiled
} from '../components/atoms/TextField'
import {
    SaveButton,
    CancelButton
} from '../components/atoms/ButtonStandard'
import DateTimebar from '../components/molecules/DateTimeBar';
import styles from '../style/styleEvent'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const AddingPlan = ({navigation}) => {
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');
    const [event, setEvent] = useState('');






    return(
      <Box style={{flex:1,padding:20}}>
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
              <Box>
                  {/* <Button  onPress={(pewPew) => navigation.navigate('EventStack')} colorScheme={'warning'} mt={5} mb={5}> */}
                  <Button  onPress={()=> navigation.navigate('EventStack')} colorScheme={'warning'} mt={5} mb={5}>
                      Save
                  </Button>

                  <Button variant="outline" onPress={() => navigation.navigate('RootDrawer')} colorScheme={'warning'}>
                      Cancel
                  </Button>

              </Box>
          </Stack>
      </Box>
    )
}
export default AddingPlan
