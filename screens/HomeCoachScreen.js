import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProviders';

import database from '@react-native-firebase/database';

const HomeTestCoach = () => {
    const [nameUser, setNameUser] = useState('');
    const { logout, user } = useContext(AuthContext);
    
    useEffect(() => {
        database()
        .ref(`/users/${user.uid}`)
        .on('value', snapshot => {
            setNameUser(snapshot.val().nameUser);
        })
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome coach {nameUser}</Text>
            <FormButton buttonTitle="Logout" onPress={() => logout()}></FormButton>
        </View>
    );
}

export default HomeTestCoach;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
})