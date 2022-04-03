import React from 'react';
import {Actionsheet, Button, Flex, Text, useDisclose, View} from 'native-base';
import {StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function Priority() {
    const {isOpen, onOpen, onClose} = useDisclose();
    return (
        <>
        <View style = {style.box}>
            <MaterialIcons name="notification-important" size={26} color="white" />
        </View>



        <Text style={style.text}>Priority</Text>

        <Button onPress={onOpen} style={style.btn}>
            <Text>None</Text>
        </Button>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content background={"#FFE0CA"}>
                <Text>Priority</Text>
                <Actionsheet.Item onPress={onClose}>
                    <Flex flexDirection={"row"}>
                        <EntypoIcon name="dot-single" size={35} mr={"3"} />
                        <Text style={style.inPriority}>None</Text>
                    </Flex>
                </Actionsheet.Item>
                <Actionsheet.Item onPress={onClose}>
                    <Flex flexDirection={"row"}>
                        <EntypoIcon name="dot-single" size={35} mr={"3"} color="#3DB911"/>
                        <Text style={style.inPriority}>Low</Text>
                    </Flex>
                </Actionsheet.Item>
                <Actionsheet.Item onPress={onClose}>
                    <Flex flexDirection={"row"}>
                        <EntypoIcon name="dot-single" size={35} mr={"3"} color="#EFAD2E"/>
                        <Text style={style.inPriority}>Medium</Text>
                    </Flex>
                </Actionsheet.Item>
                <Actionsheet.Item onPress={onClose}>
                    <Flex flexDirection={"row"}>
                        <EntypoIcon name="dot-single" size={35} mr={"3"} color="#FF0202" />
                        <Text style={style.inPriority}>High</Text>
                    </Flex>
                </Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
        </View>
</>
);
}

const style = StyleSheet.create({
    text: {
        fontSize: 15,
        marginRight : 90,
        marginLeft : 15

    },
    btn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        borderWidth: 3,
        borderColor: '#FD9340',
        width: 100,
        marginLeft : 9
    },

    box: {
        height : 40,
        width : 40,
        backgroundColor : '#FD9340',
        borderRadius : 18,
        justifyContent : "center",
        alignItems : "center",

    },

    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height:65,
        borderRadius: 16,
        width: '90%',
        justifyContent: 'center',
        alignItems : "center",
        marginTop : 12,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    inPriority: {
        fontSize: 16,
        paddingTop: 6,
    }
});

export default Priority;
