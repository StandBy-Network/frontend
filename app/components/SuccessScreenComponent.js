import React from 'react';
import {Container} from "./Container";
import {globalStyles} from "../styles/globalStyles";
import {Text, View} from "react-native";
import I18t from "../translations";
import FlatButton from "./Button";


export const SuccessScreenComponent = ({successText, buttonText}) => {

    return (
        <Container>
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
