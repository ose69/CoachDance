import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTest from '../screens/HomeTest';

const Stack = createStackNavigator();

/**
 * Stack of screens when the user is registered
 */
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={ HomeTest }
            >
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default AppStack;