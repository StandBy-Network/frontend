import React from 'react';
import {Container} from "./Container";
import {globalStyles} from "../styles/globalStyles";
import {Text, View} from "react-native";
import FlatButton from "./Button";


export const SuccessScreenComponent = ({containerTitle, successText, buttonText}) => {

    return (
        <Container title={containerTitle}>
            <View style={globalStyles.screen}>
                <Text style={globalStyles.pwText}>{successText}</Text>
                <View>
                    <FlatButton style={globalStyles.actionButtonRight} onPress={() => {
                        navigation.navigate("Main");
                    }} text={buttonText} />
                </View>
            </View>
        </Container>
    )
};
