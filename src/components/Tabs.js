import React from 'react'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
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
                component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'droplet'}
                            size={25}
                            color={focused ? 'lightcoral' : 'silver'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={'Upcoming'}
                component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'lightcoral' : 'silver'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name={'City'}
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'lightcoral' : 'silver'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs
