import React, { useState } from 'react'
import { Button, Text, Box } from 'native-base'


const SaveButton = () => {
    const clicked = () => {

    }
    return(
        <Button bgColor={"#FF975C"} borderRadius={"30"} width={"138"} height={"45"}  onPress={clicked} shadow={"2"}>
            <Text color={"#FFFFFF"}>Save</Text>
        </Button>
    )
}

const EditButton = () => {
    const clicked = () => {

    }

    return(
        <Button bgColor={"#FF975C"} width={"138"} height={"45"} onPress={clicked} >
            <Text>Edit</Text>
        </Button>
    )
}

const CancelButton = () => {
    const clicked = () => {

    }
    return(
        <Button bgColor={"none"} onPress={clicked} borderRadius={"30"} width={"138"} height={"45"}>
            <Text color={"#FF975C"}>Cancel</Text>
        </Button>
    )
}

export {
    SaveButton,
    EditButton,
    CancelButton
}

