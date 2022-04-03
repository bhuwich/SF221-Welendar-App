import React from "react";
import {
  View,
  Text,
  Button,ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,} from "react-native";
import {Box, Pressable} from "native-base";

const image = { uri: "https://sv1.picz.in.th/images/2022/03/26/8zyXYg.png" };
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {style} from "react-native/Libraries/DeprecatedPropTypes/DeprecatedImagePropType";

Icon.loadFont();
class ChangePassword extends React.Component {
  render(){
    return (




        <Button color="black" title={"< Back"}/>
    <Text style={styles.header}>Change Password</Text>

    <Box >
      <Text style={styles.textH}>Your Password</Text>
      <TextInput
          style={styles.input}
      />
      <Icon style={styles.iconin} name="eye-slash"size={25}/>
    </Box>

    <Box >
      <Text style={styles.textH}>Create New Password</Text>
      <TextInput
          style={styles.input}
      />
      <Icon style={styles.iconin} name="eye-slash"size={25}/>
    </Box>

    <Box >
      <Text style={styles.textH}>Confirm New Password</Text>
      <TextInput
          style={styles.input}
      />
      <Icon style={styles.iconin} name="eye-slash"size={25}/>
    </Box>
    <View style={styles.fixToText}>
      <TouchableOpacity
          style={styles.ButtonStyle}
      >
        <Text style={styles.textbutton}>submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.ButtonStyle}
      >
        <Text style={styles.textbutton}>cancle</Text>
      </TouchableOpacity>

    </View>
  </NativeBaseProvider>
  </ImageBackground>

  </View>
  );
  }
}
const styles = StyleSheet.create({
  header: {
    paddingLeft:35,
    fontSize: 24,
    fontWeight: '400',
    paddingBottom: 50,

  },
  textH: {
    paddingLeft:35,
    fontStyle:'normal',
    fontSize: 20,
    fontWeight:'400',
    paddingBottom: 10,
  },
  input: {
    alignSelf:"center",
    width:320.9,
    fontWeight: '400',
    height:46,
    marginBottom:30,
    backgroundColor:'#E4E3FA',
    borderRadius: 15,
  },
  shadowProp: {
    elevation: 5,
    shadowRadius: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  fixToText: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 70,

  },
  ButtonStyle: {
    backgroundColor: "#544897",
    borderBottomColor: '#737373',
    borderRadius: 14,
    width : 93.1,
    height:46,
  },
  textbutton:{
    color: "white",
    fontSize: 22,
    lineHeight: 46,
    textAlign: "center",

  },

  iconin: {
    paddingHorizontal:"15%",
    alignSelf:"flex-end",
    position:"absolute",
    paddingVertical:"12%",

  },

  boxBack:{
    alignItems:"flex-start",
    paddingLeft:"8%",
    paddingTop:"20%",
    paddingBottom:"10%"
  },
});

export default ChangePassword;
