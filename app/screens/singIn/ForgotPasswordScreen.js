import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import * as yup from "yup";
import {Formik} from "formik";
import FlatButton from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";

const pwSchema = yup.object({
    email: yup.string()
        .email()
        .required('Nem megfelelő felhasználónév!'),

});

export const ForgotPasswordScreen = ({ navigation }) => {

    return(
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={globalStyles.header}>ELFELEJTETT JELSZÓ</Text>
                    </View>
                    <View style={globalStyles.form}>
                        <Formik
                            initialValues={{ email: ''}}
                            validationSchema={pwSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput style={globalStyles.textinput}
                                               placeholder="Email cím"
                                               value={props.values.password}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.email && props.errors.email}</Text>
                                   <View style={globalStyles.buttonContainer}>
                                    <FlatButton text="Mégsem" onPress={() => {
                                        navigation.navigate('SignIn');
                                    }}
                                                style={globalStyles.cancelButton} />
                                    <FlatButton text="Mehet!" onPress={() => {
                                        //props.handleSubmit();
                                        navigation.navigate("PasswordSent");
                                    }} style={globalStyles.actionButton} />
                                   </View>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    )
};
