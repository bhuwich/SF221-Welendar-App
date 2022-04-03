import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Box, NativerBaseProvider} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import IconName from 'react-native-vector-icons/Ionicons';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

class CalendarMonth extends React.Component {
  render() {
    LocaleConfig.locales.fr = {
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: [
        'Jan.',
        'Feb.',
        'Mar.',
        'Apr.',
        'May.',
        'Jun.',
        'Jul.',
        'Aug.',
        'Sep.',
        'Oct.',
        'Nov.',
        'Dec.',
      ],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
      today: 'Today',
    };
    LocaleConfig.defaultLocale = 'fr';
    return (
      <View style={{flex: 1, backgroundColor: '#FFF7ED'}}>
        <View
          style={{
            backgroundColor: '#FDFDFD',
            width: '100%',
            height: 400,
            borderWidth: 0,
            borderBottomRightRadius: 37,
            borderBottomLeftRadius: 37,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <View style={{paddingTop: 30}}>
            <Calendar
              theme={{
                arrowColor: 'orange',
                todayBackgroundColor: 'orange',
                todayTextColor: 'white',
                textMonthFontSize: 22,
                textMonthFontWeight: 'bold',
              }}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 30,
              paddingLeft: 30,
              paddingTop: 30,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#4F3C74',
                paddingTop: 10,
              }}>
              TODAY
            </Text>
            <TouchableOpacity
              onPress={() => Alert.alert('...')}
              style={{
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 80,
                backgroundColor: 'orange',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 2,
                elevation: 3,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'white',
                }}>
                All TASK
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'orange',
              alignSelf: 'center',
              borderRadius: 15,
              width: '85%',
              height: 60,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 2,
              elevation: 3,
            }}>
            <Text style={{paddingLeft: 30}} />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItem: 'flex-end',
            paddingBottom: 20,
            paddingRight: 20,
          }}>
          <TouchableOpacity
            onPress={() => Alert.alert('...')}
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#634897',
            }}>
            <Icon name="plus" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CalendarMonth;
