import {Animated, FlatList, Image, StyleSheet, useWindowDimensions} from "react-native";
import React, { useState } from "react";
import {Box, Button, Text} from "native-base";
import {ExpandingDot} from "react-native-animated-pagination-dots";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const introData = [
    {
        key: '1',
        title: 'Welcome',
        description:
          'Hello everyone. You just enter the calendar application that will now be your main calendar!' ,
        image:
            'https://imgz.io/images/2022/04/17/undraw_Mobile_application_re_13u3.png',

    },
    {
        key: '2',
        title: 'About Me',
        description:
        "Hi , I'm welendar.The most modern calendar in this era. I will help you remember all your activities!",
        image:
            'https://imgz.io/images/2022/04/17/undraw_Online_calendar_re_wk3t.png',

    },
    {
        key: '3',
        title: 'Let\'s Go!! 🎈',
        description:
        "Are you ready? to see what I'm look like I will make sure that you fall for me 🙂",
        image:
            'https://imgz.io/images/2022/04/17/undraw_Choose_re_7d5a.png',

    }
];

const AppWelcome = ({navigation}) => {
    const { width } = useWindowDimensions();
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const renderItem = React.useCallback(
        ({ item }) => {
            return (
                <Box style={[styles.itemContainer, { width: width - 80 },  ]}>
                    <Image source={{uri:item.image}} style={{width: 300, height:300
                    }}/>
                    <Text>{item.title}</Text>
                    <Animated.Text>{item.description}</Animated.Text>
                </Box>
            );
        },
        [width]
    );
    const keyExtractor = React.useCallback((item) => item.key, []);
    const [value, setValue] = useState('');
    const { getItem, setItem } = useAsyncStorage('@storage_key');
    const GettingStarted = async () =>{
      await setItem(JSON.stringify(false));
      navigation.navigate('Main');
    }
    return (
        <Box style={[styles.container]}>
            <FlatList
                data={introData}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
                style={styles.flatList}
                pagingEnabled
                horizontal
                decelerationRate={'normal'}
                scrollEventThrottle={16}
                renderItem={renderItem}
            />
            <Box style={styles.text}>
                <Box style={styles.dotContainer}>
                    <ExpandingDot
                        data={introData}
                        expandingDotWidth={30}
                        scrollX={scrollX}
                        inActiveDotColor={'#C4C4C4'}
                        activeDotColor={'#676767'}
                        inActiveDotOpacity={0.5}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 3,
                        }}
                    />
                </Box>
            </Box>
            <Box style={styles.buttonContainer} pt={5}>
                <Button w={150} colorScheme={'warning'} bgColor='#FF975C' rounded={100}
                        onPress={() =>GettingStarted() } shadow={3} > GetStarted </Button>
            </Box>
        </Box>
    );
};

export default AppWelcome;
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    dotContainer: {
        justifyContent: 'flex-end',
        alignSelf: 'center',
    },
    itemContainer: {
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 40,
        marginVertical:0,
    },
    buttonContainer:{
        flex: 1,
        marginLeft:50,
        marginRight:50,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
});
