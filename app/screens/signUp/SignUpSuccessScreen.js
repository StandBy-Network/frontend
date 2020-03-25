import React from 'react';
import {Text, View} from "react-native";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";
import I18t from "../../translations";
import FlatButton from "../../components/Button";

export const SignUpSuccessScreen = () => {
    return (
        <Container title={I18t.t('SignUp.containerHeader')}>
            <Text style={globalStyles.header}>{I18t.t('SignUpSuccess.header')}</Text>
            <Text style={globalStyles.success}>{I18t.t('SignUpSuccess.success')}</Text>
            <Text style={globalStyles.text}>{I18t.t('SignUpSuccess.text')}</Text>
        </Container>
    )
};
