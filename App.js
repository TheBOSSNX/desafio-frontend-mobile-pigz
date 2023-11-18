import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFont } from 'expo-font';



import Login from './src/screens/login/Login';
import Dashboard from './src/screens/dashboard/Dashboard';
import Delivery from './src/screens/delivery/Delivery';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Delivery" component={Delivery} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
