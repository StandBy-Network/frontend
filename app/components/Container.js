import React from 'react';
import {globalStyles} from "../styles/globalStyles";
import {View} from 'react-native';

export const Container = ({ children }) => {
    return (
        <View style={globalStyles.container} >
            { children }
        </View>
    )
};
