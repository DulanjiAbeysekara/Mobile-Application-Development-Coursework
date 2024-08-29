import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';

export default function _layout() {


  return (
    <Tabs screenOptions={{
      headerShown: false,
    }}>

      <Tabs.Screen
        name="Home"
        options={{
          
       }}/>
      <Tabs.Screen
        name="Search"
        options={{
          
       }}/>

      <Tabs.Screen
        name="Library"
        options={{
          
        }}
      />

        <Tabs.Screen
        name="Premium"
        options={{
          
        }}
      />
      
    </Tabs>
  );
}