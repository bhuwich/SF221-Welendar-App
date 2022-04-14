import React from "react";
import {
    View,
    ImageBackground,
    StyleSheet,} from "react-native";

const image = { uri: "https://sv1.picz.in.th/images/2022/04/14/82RYoQ.png" };

class Splash extends React.Component {
    render(){
        return (
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
});


export default Splash;
