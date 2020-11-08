import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

import { AuthContext } from '../navigation/AuthProviders';

import auth from '@react-native-firebase/auth';

const SignupScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const isCoach = false;

    const { register } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            <FormInput 
                labelValue={name}
                onChangeText={(userName) => setName(userName)}
                iconType="user"
                placeHolderText="Name"
            />

            <FormInput 
                labelValue={lastName}
                onChangeText={(userLastName) => setLastName(userLastName)}
                iconType="user"
                placeHolderText="Last name"
            />

            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                iconType="mail"
                keyboardType="email-address"
                placeHolderText="Email"
                autoCapitalize="none"
                autoCorrect={false}
            />
             
            <FormInput 
                labelValue={phone}
                onChangeText={(userPhone) => setPhone(userPhone)}
                iconType="phone"
                keyboardType="numeric"
                placeHolderText="Phone number"
            />

            <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                iconType="lock"
                placeHolderText="Password"
                secureTextEntry={true}
            />

            <FormInput 
                labelValue={confirmPassword}
                onChangeText={(confirmUserPassword) => setConfirmPassword(confirmUserPassword)}
                iconType="lock"
                placeHolderText="Confirm password"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Sign up"
                onPress={() => register(email, password, name, lastName, phone, isCoach)}
            />

            <TouchableOpacity style={styles.navButton}>
                <Text 
                    style={styles.navButtonTextCoach}
                    onPress={() => navigation.navigate('SignupCoachScreen')}
                >Would you like to be a dance coach? Click here</Text>
            </TouchableOpacity>
        </View>
    ); 
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
      navButtonTextCoach: {
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});