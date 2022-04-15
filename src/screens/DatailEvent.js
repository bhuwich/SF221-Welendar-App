import React from 'react'
import { Stack, Text, Box } from 'native-base'
import {
    EditButton,
    DeleteButton,
} from '../components/atoms/ButtonStandard'
const EditEvent = () => {
    return(
        <Stack>
            <Text>
                13 April 2022
            </Text>
            <Text>
                Organizational Meeting
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum dui cursus tortor, magna bibendum at.
            </Text>
            <Box flexDirection={"row"} marginTop={"30%"} justifyContent={"space-between"}>
                <EditButton/>
                <DeleteButton/>
            </Box>
        </Stack>
    )
}

export default EditEvent