import React from 'react';
import {globalStyles} from "../styles/globalStyles";
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";


export const Container = ({ children, title }) => {
    return (
        <View style={globalStyles.container} >
            <View style={globalStyles.containerHeader}>
                <TouchableOpacity >
                    <Icon style={globalStyles.containerHeaderIcon} name="navicon" />
                </TouchableOpacity>
                <Text style={globalStyles.containerHeaderText}>{title}</Text>
            </View>
            <View style={globalStyles.containerBody}>
                { children }
            </View>
        </View>
    )
};
