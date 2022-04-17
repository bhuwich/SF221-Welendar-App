import { Text, Button } from 'native-base'
import React from 'react';
import styles from "../style/styleBtnStandard"


const SaveButton = () => {
    const clicked = () => {

    }
    return(
        <Button onPress={clicked} style = {styles.saveBtn}>
            <Text color={"#FFFFFF"}>Save</Text>
        </Button>
    )
}

const EditButton = () => {
    const clicked = () => {

    }

    return(
        <Button onPress={clicked} style = {styles.editBtn} >
            <Text color={"#FFFFFF"}>Edit</Text>
        </Button>
    )
}

const CancelButton = () => {
    const clicked = () => {

    }
    return(
        <Button onPress={clicked} style = {styles.cancelBtn}>
            <Text color={"#FF975C"}>Cancel</Text>
        </Button>
    )
}

const DeleteButton = () => {
    const clicked = () => {

    }
    return(
        <Button onPress={clicked} style = {styles.deleteBtn}>
            <Text color={"#FF975C"}>Delete</Text>
        </Button>
    )
}




export {
    SaveButton,
    EditButton,
    CancelButton,
    DeleteButton
}
