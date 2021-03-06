import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProviders';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>

            <Image 
                source={require('../assets/dancer.png')}
                style={styles.logo}
            />

            <Text style={styles.text}>Login</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeHolderText="Email"
                iconType="mail"
                keyboardType="email-address"
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeHolderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Login" 
                onPress={() => login(email, password)}
            />

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => alert('Forgot password clicked!')}
            >
                <Text style={styles.navButtonText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View> 
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
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
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
});