import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpPage from '@/components/Pages/SignUpPage/SignUp';
import GenderPage from '@/components/Pages/GenderPage/Gender';
import CreateAccount from '@/components/Pages/CreateAccontPage/CreateAccount';
import Name from '@/components/Pages/NamePage/Name';
import HomePage from '@/app/(tabs)/HomePage';
import Search from './(tabs)/Search';
import Library from './(tabs)/Library';
import Premium from './(tabs)/Premium';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Premium" component={Premium} />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen 
          name='Name-Page' 
          component={Name} 
        />
        <Stack.Screen 
          name='MainTabs' 
          component={MainTabs} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
