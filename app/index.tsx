import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpPage from '@/components/Pages/SignUpPage/SignUp';
import GenderPage from '@/components/Pages/GenderPage/Gender';
import CreateAccount from '@/components/Pages/CreateAccontPage/CreateAccount';
import Name from '@/components/Pages/NamePage/Name';
import HomePage from '@/app/(tabs)/HomePage';
import Search from '@/app/(tabs)/Search'; // Updated path
import Library from '@/app/(tabs)/Library'; // Updated path
import Premium from '@/app/(tabs)/Premium'; // Updated path
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons"; // Removed duplicate import

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{

        tabBarActiveTintColor: 'white', 

        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
          fontWeight: 'bold',
        
        },
        tabBarStyle: {
          backgroundColor: 'black', // Set the background color to black
        },
        
      }}>
      <Tab.Screen 
        name="Home" 
        component={HomePage} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={25} color={focused ? 'white' : 'white'} />
          ),
        }}/>

      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="search" size={25} color={focused ? 'white' : 'white'} />
          ),
        }}/>

      <Tab.Screen 
        name="Library" 
        component={Library}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name="library-outline" size={25} color={focused ? 'white' : 'white'} />
          ),
        }}/>

      <Tab.Screen 
        name="Premium" 
        component={Premium} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name='spotify-with-circle' size={25} color={focused ? 'white' : 'white'} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="SignUp-Page"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignUp-Page" component={SignUpPage} />
        <Stack.Screen name="CreateAccount-Page" component={CreateAccount} />
        <Stack.Screen name="Gender-Page" component={GenderPage} />
        <Stack.Screen name="Name-Page" component={Name} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
