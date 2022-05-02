import React, { useState} from 'react'
import {Text, Select, Stack, Box, Button} from 'native-base'
import {
    EventTextFiled,
    NoteTextFiled
} from '../components/atoms/TextField'

import DateTimebar from '../components/molecules/DateTimeBar';
import styles from '../style/styleEvent'


const AddingPlan = ({navigation}) => {
    const [service, setService] = useState('');







    return(
      <Box style={{flex:1,padding:20}} backgroundColor="#FFFFFF">
          <Stack style = {styles.stack}>
              <Text style ={styles.header}>Adding Plan</Text>
              <EventTextFiled/>
              <DateTimebar/>
              <Text style = {styles.text}>Location</Text>
              <Box style = {styles.selector}>
                  <Select selectedValue={service}
                          onValueChange={itemValue => setService(itemValue)}>
                      <Select.Item label='Online' value = "online"/>
                      <Select.Item label='Offline' value = "offline"/>
                  </Select>
              </Box>

              <NoteTextFiled/>
              <Box>

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
