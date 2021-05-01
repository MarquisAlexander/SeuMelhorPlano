import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import GetPosition from './pages/GetLocation';
import Welcome from './pages/Welcome';
import Maps from './pages/Maps';
import Offers from './pages/Offers';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Welcome} 
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="Notifications" 
                component={GetPosition}
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="Maps" 
                component={Maps} 
            />
            <Stack.Screen 
                name="Offers" 
                component={Offers} 
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;