import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function FlatButton({ text, onPress }) {

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 60,
        marginRight: 60,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#269EFC',
        marginTop: 30
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

