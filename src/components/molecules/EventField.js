import React, { useEffect, useState } from "react";
import {
    Pressable,
    Text,
    Box,
    HStack,
    Spacer,
} from 'native-base';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EventField() {
  const [list,setList] = useState();
  const [isFecth,setIsFecth] = useState(false);
  useEffect(()=>{
    fectData();
  }, [list]);

  const fectData= async () =>{
    if(!isFecth){
      const dataNote = await AsyncStorage.getItem('fliterData');
      setList(JSON.parse(dataNote));
      console.log(list);
      setIsFecth(true);
    }


    // await setToken(JSON.parse(res));

  }
    return (
        <Box alignItems="center" mt="5">
            <Pressable>
                {({ isHovered, isFocused, isPressed }) => {
                    return (
                        <Box
                            borderWidth="0"
                            bg={isPressed ? 'warning.50'  : isHovered ? 'warning.50' : 'warning.50'/*warning.400 */}
                            p="5" rounded="8"
                            style={{transform: [{scale: isPressed ? 0.96 : 1,},],}}>
                            <HStack alignItems="center">
                                <Text
                                    color="coolGray.800" //white
                                    mt="0"
                                    fontWeight="medium"
                                    fontSize="sm">

                                </Text>
                                <Spacer />
                                <Text fontSize="xs" color="coolGray.800">


                                </Text>
                            </HStack>
                            <Text fontSize="xs" mt="1" /*white*/ >
                            </Text>

                        </Box>
                    );
                }}
            </Pressable>
        </Box>
    );
}


