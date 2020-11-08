import React, { useEffect, useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTest from '../screens/HomeTest';
import HomeTestCoach from '../screens/HomeTestCoach';

import database from '@react-native-firebase/database';
import { AuthContext } from '../navigation/AuthProviders';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

/**
 * Stack of screens when the user is registered
 */
const AppStack = () => {
    const [isCoach, setIsCoach] = useState(null);
    const { user } = useContext(AuthContext); ////

    useEffect(() => {
        database()
        .ref(`/users/${auth().currentUser.uid}`)
        .on('value', snapshot => {
            setIsCoach(snapshot.val().isCoach);
        })
    }, []);

    if(isCoach) {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={ HomeTestCoach }
                >
                </Stack.Screen>
            </Stack.Navigator>
        );
    } else {
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
    
}

export default AppStack;