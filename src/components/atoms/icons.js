import React from "react";
import { Box } from "native-base"; 
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "../style/styleIcons";


const DateIcon = () => {
    return (
        <Box style = {styles.IconDate}>
            <Entypo name = "calendar" size = {32} color = "white"/>
        </Box>
    )
}

const TimeIcon = () =>{
    return (
        <Box style = {styles.IconTime}>
            <AntDesign name = "clockcircleo" size = {32} color = "white"/>
        </Box>
    )
}

const RepeatIcon = () => {
    return (
        <Box style = {styles.IconRepeat}>
            <Feather name = "repeat" size = {32} color = "white"/>
        </Box>
    )
}

const PriorityIcon = () => {
    return (
        <Box style = {styles.IconPriority}>
            <Feather name = "alert-circle" size = {32} color = "white"/>
        </Box>
    )
}

export {
    DateIcon,
    TimeIcon,
    PriorityIcon,
    RepeatIcon
}