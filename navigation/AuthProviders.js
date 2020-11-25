import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const AuthContext = createContext();

/**
 * This is the code to allow the user to login, register and logout
 * A context is used to pass data in another part of the code.
 */

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch(e) {
                        console.log(e);
                    }
                    
                },
                register: async (email, password, name, lastName, phone, isCoach) => {
                    try {
                        await auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then(() => {
                                const uid = auth().currentUser.uid;

                                database()
                                .ref(`/users/${uid}`)
                                .set({
                                    uidUser: uid,
                                    emailUser: email,
                                    nameUser: name,
                                    lastNameUser: lastName,
                                    phoneUser: phone,
                                    isCoach: isCoach
                                }); 
                        });
                    } catch(e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        auth().signOut();
                    } catch(e) {
                        console.log(e);
                    }
                },
                addTest: async (title, description) => {
                    try {
                        database()
                        .ref(`/addTest`)
                        .push({title, description})
                    } catch(e) {
                        console.log(e);
                    }
                }
            }}
        >
            { children }
        </AuthContext.Provider>
    );

}