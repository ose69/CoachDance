import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { AuthContext } from '../navigation/AuthProviders';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [nameUser, setNameUser] = useState('');
    const [lastNameUser, setLastNameUser] = useState('');
    const [emailUser, setEmailUser] = useState('');

    useEffect(() => {
        database()
        .ref(`/users/${auth().currentUser.uid}`)
        .on('value', snapshot => {
            setNameUser(snapshot.val().nameUser);
            setLastNameUser(snapshot.val().lastNameUser);
            setEmailUser(snapshot.val().emailUser);
        })
    }, []);

    const { logout } = useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>{nameUser + ' ' + lastNameUser}</Title>
                                <Caption style={styles.caption}>{emailUser}</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="human-handsup"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Services"
                            onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="currency-usd"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Costs"
                            onPress={() => {
                                props.navigation.navigate('Details')
                            }}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="credit-card-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Register card"
                            onPress={() => {
                                alert('Adios :c')
                            }}
                        />

                       <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {
                                alert('Adios :c')
                            }}
                        />

                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="help"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Help"
                            onPress={() => {
                                alert('Adios :c')
                            }}
                        />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Sign Out"
                    icon={({color, size}) => (
                        <Icon 
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        logout()
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });