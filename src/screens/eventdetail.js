import React from 'react'
import { Text, Box, VStack, IconButton, Heading, ScrollView, Button} from 'native-base'
import {StyleSheet} from "react-native";

const EventDetail = ({navigation}) => {
    return(
        <ScrollView>
        <Box flex={1} py={5} px={5}>
            <Button ariant="subtle"  onPress={() => navigation.navigate('RootDrawer')} colorScheme={'warning'} mt={5} mb={5} variant="outline">
                Back
            </Button>

            <VStack>
                <Text>
                    13 April 2022
                </Text>
                <Text>
                    Organizational Meeting
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum dui cursus tortor, magna bibendum at.
                </Text>
                <Box>
                    <Button  onPress={() => navigation.navigate('RootDrawer')} colorScheme={'warning'} mt={5} mb={5}>
                        Save
                    </Button>

                    <Button variant="outline" onPress={() => navigation.navigate('EditEvent')} colorScheme={'warning'}>
                        Edit
                    </Button>

                </Box>
            </VStack>
        </Box>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
    },
    HeadingText:{
        justifyContent:"center",
        alignItems:"stretch",
        marginTop:10,
        marginBottom:20,
    }
});

export default EventDetail;
