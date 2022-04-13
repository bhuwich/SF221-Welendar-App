import React from "react";
import { Input, Box, FormControl } from "native-base";
import FormStyles from "../style/styleInput"

const InputTitle = () => {
    return (
    <Box>
      <FormControl style = {FormStyles.FormControl}>
        <FormControl.Label>Title</FormControl.Label>
        <Input placeholder="Please input your Title"/>
      </FormControl>
    </Box>
    )
}

const InputNotes = () => {
    return (
    <Box>
      <FormControl style = {FormStyles.FormControl}>
        <FormControl.Label>Note</FormControl.Label>
        <Input placeholder="Notes here"/>
      </FormControl>
    </Box>
    )
}

export {
    InputTitle,
    InputNotes
}

//Export List