import React from 'react';
import { CalendarList, LocaleConfig} from 'react-native-calendars';

class Year extends React.Component {
    render(){
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
        console.log('welcome');
        LocaleConfig.defaultLocale = 'fr';
        return(
            <CalendarList
                theme={{
                    'stylesheet.calendar.header': {
                        header: {
                            justifyContent: 'flex-start',
                            marginBottom: 10,
                            marginLeft: 10
                        },
                        monthText: {
                            fontSize: 22,
                            fontWeight: 'bold',
                            color:'#2F2E41'
                        },
                        dayHeader: {
                            width:25,
                            marginLeft:15,
                            marginTop: 10,
                            fontWeight: 'bold',
                            color: '#2F2E41'
                        }
                    },
                    todayBackgroundColor: '#FF975C',
                    todayTextColor:'white',
                    textDayFontWeight: 'bold',
                    dayTextColor: '#2F2E41'
                }}
                hideArrows
                enableSwipeMonths
            >
            </CalendarList>
        );
    }
}

export default Year;
