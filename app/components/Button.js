import React from 'react';
import { Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";



export default function FlatButton({ text, onPress, style }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Text style={globalStyles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
