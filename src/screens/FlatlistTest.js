import React, { useEffect, useState } from "react";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Example = (props) => {
  const [dataList,setDataList] = useState([]);
  const [isFecth,setIsFecth] = useState(false);



  useEffect(()=>{
    fectData();
  }, [dataList]);

  const fectData= async () => {
    if (!isFecth) {
      const dataNote = await AsyncStorage.getItem('fliterData');
      setDataList(JSON.parse(dataNote));
      console.log(dataList);

      // await setToken(JSON.parse(res));

    }
  }
  return <Box>
    <Heading fontSize="xl" p="4" pb="3">
      Event
    </Heading>
    <FlatList data={dataList} renderItem={({
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
