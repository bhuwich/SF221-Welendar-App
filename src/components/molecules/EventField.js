import React from 'react';
import {
    Pressable,
    Text,
    Box,
    HStack,
    Spacer,
} from 'native-base';

export default function EventField() {
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
                                    Marketing License
                                </Text>
                                <Spacer />
                                <Text fontSize="xs" color="coolGray.800">
                                    10:00 AM - 11:30 AM
                                </Text>
                            </HStack>
                            <Text fontSize="xs" mt="1" /*white*/ >
                                Bengaluru (also called Bangalore) is the center of India's
                            </Text>
                        </Box>
                    );
                }}
            </Pressable>
        </Box>
    );
}


