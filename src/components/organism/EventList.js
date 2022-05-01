import * as React from 'react';
import { Heading, Box, Fab, FlatList, HStack, VStack, Text, Spacer, NativeBaseProvider, Center } from "native-base";
import EventBoxList from '../molecules/EventField';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Example = () => {
    const [dataList,setDataList] = useState([]);
    const [isFecth,setIsFecth] = useState(false);



    useEffect(()=>{
        fectData();
    }, [dataList]);

    const fectData= async () =>{
        if(!isFecth){
            const dataNote = await AsyncStorage.getItem('dataArray');
            setDataList(JSON.parse(dataNote));
            console.log(dataList);
            setIsFecth(true);
        }


        // await setToken(JSON.parse(res));

    }
    return <Box height="290" width="390" backgroundColor="#FFFFFF" >
        <Heading fontSize="xl" p="4" pb="3" pr="80%">
            Event
        </Heading>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={dataList} renderItem={({
                                                   item
                                               }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">


                <VStack>
                    <Text _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" bold>
                        {item.eventSave}
                    </Text>
                    <Text color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        {item.dateSave}
                    </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
                    color: "warmGray.50"
                }} color="coolGray.800" alignSelf="flex-start">
                    {item.timeSave}
                </Text>
            </HStack>
        </Box>} keyExtractor={item => item.id} />
    </Box>;
};

export default () => {
    return (
      <NativeBaseProvider>
          <Center flex={1} px="3">
              <Example />
          </Center>
      </NativeBaseProvider>
    );
};
