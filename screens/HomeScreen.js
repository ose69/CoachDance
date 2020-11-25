import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import FormButton from '../components/FormButton';
import FormCard from '../components/FormCard';

import { AuthContext } from '../navigation/AuthProviders';

import database from '@react-native-firebase/database';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeTest = () => {
    const [nameUser, setNameUser] = useState('');
    const [addTest, setAddTest] = useState([]);
    const { user } = useContext(AuthContext);
        
    
    useEffect(() => {
        database()
        .ref(`/addTest`)
        .on('value', snapshot => {
            console.log(snapshot.val())
        })
    }, []);

    return (
        <ScrollView>
            {   
                <View style={styles.container}>
                    <FormCard title='asd' description='asd' image={require('../assets/dancer.png')}/>
                </View>
            }
        </ScrollView>
    );
}

export default HomeTest;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
})