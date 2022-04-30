import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  const [value, setValue] = useState('value');
  const { getItem, setItem } = useAsyncStorage('@storage_key');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async newValue => {

    const movieData = {
      UrlImage : "Thachot",
      movie_desc : "Wongmetin"
    };
    await setItem(JSON.stringify(movieData));

    setValue(JSON.stringify(movieData));
  };

  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }

    console.log(value)
  }

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={{ margin: 40 }}>
      <Text>Current value: {value}</Text>
      <TouchableOpacity
        onPress={() =>
          writeItemToStorage(
            Math.random()
              .toString(36)
              .substr(2, 5)
          )
        }
      >
        <Text>Update value</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => clear()
        }
      >
        <Text>Get All Key</Text>
      </TouchableOpacity>
    </View>
  );
}
