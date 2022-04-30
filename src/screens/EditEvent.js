import React, { useState } from 'react'
import {} from 'react-native'
import {Text, Select, Stack, Box, Button,ScrollView} from 'native-base'
import {
    EventTextFiled,
    NoteTextFiled
} from '../components/atoms/TextField';
import DateTimebar from '../components/molecules/DateTimeBar';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style/styleEvent';

const EditEvent = ({navigation}) => {
    const [service, setService] = useState('')

    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
        <Box flex={1} py={5} px={5} pt={10}>
        <Stack>
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
            <Box >
                <Button  onPress={async () =>
                {
                    await AsyncStorage.setItem('@storage_key','date');
                    navigation.navigate('RootDrawer')
                }
                } colorScheme={'warning'} mt={5} mb={5}>
                    Save
                </Button>

                <Button variant="outline" onPress={() => navigation.navigate('RootDrawer')} colorScheme={'warning'}>
                    Cancel
                </Button>
                <Button variant="outline" onPress={() => navigation.navigate('EditEvent')} colorScheme={'warning'} mt={5}>
                    Delete
                </Button>
            </Box>
        </Stack>
        </Box>
            </ScrollView>
    )
}
export default EditEvent;
