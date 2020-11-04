import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={ LoginScreen }
                options={{header: () => null}}
            >
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default AuthStack;