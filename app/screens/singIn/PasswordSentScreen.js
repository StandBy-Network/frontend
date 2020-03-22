import React from 'react';
import { Text, View } from 'react-native';
import {globalStyles} from "../../styles/globalStyles";
import FlatButton from "../../components/Button";
import {Container} from "../../components/Container";

export const PasswordSentScreen = ({ navigation }) => {

    return(
        <Container>
            <View style={globalStyles.screen}>
                <Text style={globalStyles.pwText}>Jelszó emlékeztető elküldve</Text>
                <View>
                    <FlatButton style={globalStyles.actionButtonRight} onPress={() => {
                        navigation.navigate("Main");
                    }} text='Rendben' />
                </View>
            </View>
        </Container>
    )
};
