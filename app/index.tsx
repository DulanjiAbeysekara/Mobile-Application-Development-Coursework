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
      <Stack.Navigator initialRouteName='SignUpPage'>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
