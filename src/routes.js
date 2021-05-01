import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {GetLocation} from './pages/GetLocation';
import {Welcome} from './pages/Welcome';
import {Maps} from './pages/Maps';
import {Offers} from './pages/Offers';

const Stack = createStackNavigator();

function StackNavigation() {
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
                component={GetLocation}
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
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;