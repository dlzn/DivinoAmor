import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'



import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import Search from '../pages/Search';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes (){
    return (

        <NavigationContainer>
                <Navigator screenOptions={{
                    tabBarActiveTintColor: '#CBAA6C',
                    tabBarInactiveTintColor: 'gray',
                }}>

                    <Screen name="Página Inicial"
                        component={HomePage}
                        options={{
                            tabBarIcon: () => {
                                return <AntDesign name="home" size={24} color="#CBAA6C" />;
                            }
                        }} />
                    <Screen name="Buscar"
                        component={Search}
                        options={{
                            tabBarIcon: () => {
                                return <AntDesign name="search1" size={24} color="#CBAA6C" />;
                            }
                            }} />

                         <Screen name="Santos"
                        component={DetailPage}
                        options={{
                            tabBarIcon: () => {
                                return <MaterialCommunityIcons name="hand-clap" size={24} color="#CBAA6C" />;
                            }
                        }} />
                </Navigator>
            </NavigationContainer>
    )
}