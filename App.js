import React, {Component} from "react";
import { Center, NativeBaseProvider } from "native-base";
import Header from "./src/components/atoms/header";

import {
    Submitbtn
} from "./src/components/atoms/buttons"

import {
    DateBar,
    TimeBar,
    RepeatBar,
    PriorityBar
} from "./src/components/molecules/editBar";
import InputBox from "./src/components/molecules/editText";


class Welendar extends Component {
    render () {
        return (
            <NativeBaseProvider>
            <Center flex={1} bg= "#FFF7ED">
                <Header/>
                <InputBox/>
                <DateBar/>
                <TimeBar/>
                <RepeatBar/>
                <PriorityBar/>
                <Submitbtn/>
            </Center>
        </NativeBaseProvider>
        )
    }
}

class ChangePassword extends React.Component {
  render(){
    return (
        <Welendar/>
    )
}
}