import React from 'react';
import { Text, View } from 'react-native';
import {globalStyles} from "../../styles/globalStyles";
import FlatButton from "../../components/Button";
import {Container} from "../../components/Container";
import I18t from "../../translations";

export const PasswordSentScreen = ({ navigation }) => {

    return(
        <Container>
            <View style={globalStyles.screen}>
                <Text style={globalStyles.pwText}>{I18t.t('PasswordSent.text')}</Text>
                <View>
                    <FlatButton style={globalStyles.actionButtonRight} onPress={() => {
                        navigation.navigate("Main");
                    }} text={I18t.t('PasswordSent.button')} />
                </View>
            </View>
        </Container>
    )
};
