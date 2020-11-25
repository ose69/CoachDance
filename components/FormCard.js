import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { windowWidth, windowHeight } from '../utils/Dimentions';

export default function  Card({title, description, location, image, onPress}) {
    const aligment = new Animated.Value(400);

    return (
        <>
            <TouchableOpacity style={styles.card} onPress={() => alert('Hola :v')}>
                <Animated.View style={[{ flexDirection: "row" }]}>
                    <View style={styles.cardImage} >
                        <Image style={{ width: "100%", height: "100%", borderRadius: 20 }} source={image}></Image>
                    </View>
                    
                    <View style={{ flex: 0.6, marginHorizontal: 12, overflow: "hidden" }} >
                        <Text style={styles.cardTitle}>{title}</Text>
                        <Text style={styles.cardDescription}>{description}</Text>
                    </View>
                    
                </Animated.View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#000",
        width: windowWidth / 1.13,
        padding: 12,
        marginTop: 20,
        borderRadius: 15,

        /**
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.5 */
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    },
    cardDescription: {
        fontSize: 14,
        color: "#aaa",
        marginLeft: 10
    },
    cardLocation: {
        fontSize: 14,
        color: "#aaa",
        marginLeft: 10
    },
    cardImage: {
        width: 100,
        height: 100,
        padding: 0,
        flex: 0.3
    }
});