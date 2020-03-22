import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from "../styles/globalStyles";

export default function TextLink({ text, onPress, style }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={style}>
                <Text style={globalStyles.textLink}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
