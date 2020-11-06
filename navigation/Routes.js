import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProviders';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
    // Set an initializing state whilst Firebase connects
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitizalizing] = useState(true);

    // Handle user state changes
    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitizalizing(false);
    }
    
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if(initializing) return null;

    // If the user is logged the app screens are displayed if not 
    // the auth screens (login, signup) are displayed
    return (
        <NavigationContainer>
            { user ? <AppStack/> : <AuthStack />}
        </NavigationContainer>
    );
}

export default Routes;