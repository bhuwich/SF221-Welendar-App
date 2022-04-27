import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    page : {
        justifyContent : "center",
        alignItems : "center"
    },

    header : { 
        fontSize : 28,
        fontWeight : "bold",
        paddingTop : "10%",
        marginBottom : "10%"
        
    },

    element : { 
        marginBottom : 10
    },

    dateBox : {
        flexDirection : "row",
        marginBottom : 10

    },

    timeBox : {
        marginBottom : 10
    },

    button : {
        justifyContent : "center",
        alignItems : "center",
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
        backgroundColor : "#46455A",
        width : 45,
        height : 40
    },
})