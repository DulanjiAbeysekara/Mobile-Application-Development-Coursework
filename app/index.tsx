import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from '@/components/Pages/SignUpPage/SignUp'
import GenderPage from '@/components/Pages/GenderPage/Gender';
import CreateAccount from '@/components/Pages/CreateAccontPage/CreateAccount';

const Stack = createStackNavigator(); 

export default function Index() { 
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        initialRouteName='SignUp-Page' 
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen 
          name='SignUp-Page' 
          component={SignUpPage} 
        />

        <Stack.Screen 
          name='CreateAccount-Page' 
          component={CreateAccount} 
        />

        <Stack.Screen 
          name='Gender-Page' 
          component={GenderPage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
