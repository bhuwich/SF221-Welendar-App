import { Box } from "native-base";
import React, { Component } from "react"
import {
    InputTitle,
    InputNotes
} from "../atoms/inputs"
import styles from "../style/styleInputText"

class InputBox extends Component {
    render() {
        return (
            <Box style = {styles.BoxInput}>
                <InputTitle/>
                <InputNotes/>
            </Box>
        )
    }
}

export default InputBox;