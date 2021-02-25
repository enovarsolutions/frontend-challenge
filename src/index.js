import 'react-native-gesture-handler';
import React from 'react'
import Home from './pages/Home'
import Contract from './pages/Contract'
import Help from './pages/Help'
import Account from './pages/Account'

import Value from './pages/Value'
import Time from './pages/Time'
import Result from './pages/Result'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { createAppContainer, NavigationEvents } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    Value: {
        screen: Value,
        navigationOptions: {
            headerTitle: 'Novo empréstimo',
            headerStyle: {
                backgroundColor: '#000',
                borderBottomRightRadius: 40,
                height: 70
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }
    },
    Time: {
        screen: Time,
        navigationOptions: {
            headerTitle: 'Novo empréstimo',
            headerStyle: {
                backgroundColor: '#000',
                borderBottomRightRadius: 40,
                height: 70
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }
    },
    Result: {
        screen: Result,
        navigationOptions: {
            headerTitle: 'Novo empréstimo',
            headerStyle: {
                backgroundColor: '#000',
                borderBottomRightRadius: 40,
                height: 70
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
        }
    },
})

const Routes = createAppContainer(
    createBottomTabNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Inicio',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="home-outline" size={30} color={tintColor} />
                )
            }
        },
        Contract: {
            screen: Contract,
            navigationOptions: {
                tabBarLabel: 'Contratos',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="document-text-outline" size={30} color={tintColor} />
                )
            }
        },
        Help: {
            screen: Help,
            navigationOptions: {
                tabBarLabel: 'Dúvidas',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="help-circle-outline" size={30} color={tintColor} />
                )
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarLabel: 'Conta',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="person-outline" size={30} color={tintColor} />
                )
            }
        }
    }, {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            inactiveTintColor: '#000',
            style: {
                height: 60,
            },
            labelStyle: {
                fontSize: 12,
            },
        }
    })
);

export default Routes;