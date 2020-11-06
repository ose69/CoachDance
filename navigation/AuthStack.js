import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SignupCoachScreen from '../screens/SignupCoachScreen';

const Stack = createStackNavigator();

/**
 * Stack of screens when user is going to login or register
 */

const AuthStack = () => {
    return (
        <Stack.Navigator>   
            <Stack.Screen
                name="Login"
                component={ LoginScreen }
                options={{header: () => null}}
            >
            </Stack.Screen>

            <Stack.Screen
                name="Signup"
                component={ SignupScreen }
                options={{header: () => null}}
            >
            </Stack.Screen>

            <Stack.Screen
                name="SignupCoachScreen"
                component={ SignupCoachScreen }
                options={{header: () => null}}
            >
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default AuthStack;