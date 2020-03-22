import React from 'react';
import {Text, View} from "react-native";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";

export const SignUpSuccessScreen = () => {
    return (
        <Container>
            <Text style={globalStyles.header}>REGISZTRÁCIÓ, FELIRATKOZÁS</Text>
            <Text style={globalStyles.success}>Sikeres regisztráció :)</Text>
            <Text style={globalStyles.text}>Másodperceken belül használhatod... :)</Text>
        </Container>
    )
};
