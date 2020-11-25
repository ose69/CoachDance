import React, { useEffect, useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

import { DrawerContent } from '../screens/DraweContent';

import HomeScreen from '../screens/HomeScreen';
import HomeCoachScreen from '../screens/HomeCoachScreen';

import database from '@react-native-firebase/database';
import { AuthContext } from '../navigation/AuthProviders';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    const { addTest } = useContext(AuthContext);

    return (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}>
        <HomeStack.Screen name="Home" component={ HomeScreen } options={{
            title: 'Home',
            headerLeft: () => (
                <Icon.Button name="menu" size={25} 
                    backgroundColor="#009387"
                    onPress={() => {
                        navigation.openDrawer()
                    }}
                />
            ),
            headerRight: () => (
                <Icon.Button name="plus" size={25}
                    backgroundColor="#009387"
                    onPress={() => {
                        addTest('hola test', 'hola test')
                    }}
                /> 
            )
        }} />
    </HomeStack.Navigator>
    );
}

/**
 * Stack of screens when the user is registered
 */
const AppStack = () => {
    const [isCoach, setIsCoach] = useState(null);

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
                    component={ HomeCoachScreen }
                >
                </Stack.Screen>
            </Stack.Navigator>
        );
    } else {
        return (
            // <Stack.Navigator>
            //     <Stack.Screen 
            //         name="Home" 
            //         component={ HomeTest }
            //     >
            //     </Stack.Screen>
            // </Stack.Navigator>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="Details" component={HomeCoachScreen} />
            </Drawer.Navigator>
        );
    }
    
}

export default AppStack;