import React from 'react'
import { Text, Box, VStack, ScrollView, Button } from 'native-base'
import {StyleSheet} from "react-native";
import { useSelector } from 'react-redux';

const EventDetail = ({navigation}) => {
    const todos = useSelector((state) => state.todos);

    return(
        <ScrollView>
        <Box flex={1} py={5} px={5}>

            <Button 
            ariant="subtle"  
            onPress={() => navigation.navigate('RootDrawer')} 
            colorScheme={'warning'} 
            mt={5} mb={5} 
            variant="outline">
                Back
            </Button>

            <VStack>
                {todos.map((todo) =>(
                <Text key={todo.id}>{todo.text}</Text>
                ))}

                <Box>
                    <Button  
                    onPress={() => navigation.navigate('RootDrawer')} 
                    colorScheme={'warning'} mt={5} mb={5}>
                        Save
                    </Button>

                    <Button 
                    variant="outline" 
                    onPress={() => navigation.navigate('EditEvent')} 
                    colorScheme={'warning'}>
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
