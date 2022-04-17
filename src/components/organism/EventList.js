import * as React from 'react';
import { Heading,Box,Fab} from 'native-base';
import EventBoxList from '../molecules/EventField';

export default function EventList(){
    return (
        <Box py={5}>
            <Heading size="md" ml={10}>Events</Heading>
                <EventBoxList/>
                <EventBoxList/>
                <EventBoxList/>
                <EventBoxList/>
                <EventBoxList/>
                <EventBoxList/>
        </Box>
    );
}
