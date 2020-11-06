import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

const SignupCoachScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
 
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create a coach account</Text>

            <FormInput 
                labelValue={name}
                onChange={(userName) => setName(userName)}
                iconType="user"
                placeHolderText="Name"
            />

            <FormInput 
                labelValue={lastName}
                onChange={(userLastName) => setLastName(userLastName)}
                iconType="user"
                placeHolderText="Last name"
            />

            <FormInput 
                labelValue={email}
                onChange={(userEmail) => setEmail(userEmail)}
                iconType="mail"
                keyboardType="email-address"
                placeHolderText="Email"
            />

            <FormInput 
                labelValue={phone}
                onChange={(userPhone) => setPhone(userPhone)}
                iconType="phone"
                keyboardType="numeric"
                placeHolderText="Phone number"
            />

            <FormInput 
                labelValue={password}
                onChange={(userPassword) => setPassword(userPassword)}
                iconType="lock"
                placeHolderText="Password"
                secureTextEntry={true}
            />

            <FormInput 
                labelValue={confirmPassword}
                onChange={(confirmUserPassword) => setConfirmPassword(confirmUserPassword)}
                iconType="lock"
                placeHolderText="Confirm password"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Sign up"
                onPress={() => alert('Hola')}
            />

        </View>
    ); 
}

export default SignupCoachScreen;

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