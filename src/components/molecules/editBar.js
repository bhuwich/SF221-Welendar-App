import React, { Component } from "react";
import { Repeatbtn,
Prioritybtn,
Datebtn,
Timebtn } from "../atoms/buttons";

import styles from "../style/styleEditBar"
import styleText from "../style/styleText"

import { DateIcon,
TimeIcon,
RepeatIcon,
PriorityIcon } from "../atoms/icons";

import { Box, Text } from "native-base";


class DateBar extends Component {
    render() {
        return (
            <Box style = {styles.BarDate}>
                <DateIcon/>
                <Text style = {styleText.barText}>Date</Text>
                <Datebtn/>
            </Box>
        )
    }
}

class TimeBar extends Component {
    render() {
        return (
            <Box style = {styles.BarTime}>
                <TimeIcon/>
                <Text style = {styleText.barText}>Time</Text>
                <Timebtn/>
            </Box>
        )
    }
}

class RepeatBar extends Component {
    render() {
        return (
            <Box style = {styles.BarRepeat}>
                <RepeatIcon/>
                <Text style = {styleText.barText}>Repeat</Text>
                <Repeatbtn/>
            </Box>
        )
    }
}

class PriorityBar extends Component {
    render() {
        return (
            <Box style = {styles.BarPriority}>
                <PriorityIcon/>
                <Text style = {styleText.barText}>Priority</Text>
                <Prioritybtn/>
            </Box>
        )
    }
}

export {
    DateBar,
    TimeBar,
    RepeatBar,
    PriorityBar
};