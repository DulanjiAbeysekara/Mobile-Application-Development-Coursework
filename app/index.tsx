import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from '@/components/Pages/SignUpPage/SignUp';
import GenderPage from '@/components/Pages/GenderPage/Gender';

const Stack = createStackNavigator(); 

export default function Index() { 
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName='SignUpPage' 
        screenOptions={{ headerShown: false }}  // Apply headerShown: false globally
      >
        <Stack.Screen 
          name='SignUpPage' 
          component={SignUpPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name='GenderPage' 
          component={GenderPage} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
