import React from 'react'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'lightcoral',
                tabBarInactiveTintColor: 'silver',
                tabBarStyle: {
                    backgroundColor: 'lavenderblush'
                },
                headerStyle: {
                    backgroundColor: 'lavenderblush'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'lightcoral'
                }
            }}
        >
            <Tab.Screen
                name={'Current'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={25}
                            color={focused ? 'lightcoral' : 'silver'}
                        />
                    )
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name={'Upcoming'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'lightcoral' : 'silver'}
                        />
                    )
                }}
            >
                {() => <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen
                name={'City'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'lightcoral' : 'silver'}
                        />
                    )
                }}
            >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs
