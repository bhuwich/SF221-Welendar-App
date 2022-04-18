import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';
import moment from "moment";
LocaleConfig.locales['fr'] = {
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
        'December'
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    today: "Today"
};
LocaleConfig.defaultLocale = 'fr';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };



    return (

        <View style={{flex: 1}}>

            <Agenda
                style={{marginLeft:5 ,marginRight:5}}
                theme={{
                    'stylesheet.calendar.header': {
                        header: {
                            justifyContent: 'flex-start',
                            marginTop: 6,
                            marginBottom: 10,
                            marginLeft: 15
                        },
                        monthText: {
                            fontSize: 22,
                            fontWeight: 'bold',
                            color:'#2F2E41'
                        },
                        dayHeader: {
                            marginLeft:10,
                            width:25,
                            marginTop: 10,
                            fontWeight: 'bold',
                            color: '#2F2E41'
                        }
                    },
                    'stylesheet.agenda.main':{
                        dayHeader: {
                            fontWeight: 'bold',
                            color: '#2F2E41'


                        }
                    },
                    'stylesheet.agenda.list':{
                        today: {
                            color: '#FF975C'
                        },


                    },
                    todayBackgroundColor: '#FF975C',
                    todayTextColor:'white',
                    textDayFontWeight: 'bold',
                    dayTextColor: '#2F2E41',
                    selectedDayBackgroundColor: '#fdb69a'
                }}
                hideArrows
                enableSwipeMonths
                items={items}
                loadItemsForMonth={loadItems}
                hideKnob={false}
                showClosingKnob={true}
                selected={moment(new Date()).format("YYYY-MM-DD")}
                hideExtraDays={false}


                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={100}
                markedDates={{}}


            />
        </View>
    );
};

export default Schedule;
