import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import * as yup from "yup";
import {Formik} from "formik";
import FlatButton from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";
import I18t from '../../translations';

const pwSchema = yup.object({
    email: yup.string()
        .email()
        .required(I18t.t('ForgotPassword.emailError'))
});

export const ForgotPasswordScreen = ({ navigation }) => {

    return(
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={globalStyles.header}>{I18t.t('ForgotPassword.title')}</Text>
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
                                               placeholder={I18t.t('ForgotPassword.email')}
                                               value={props.values.password}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.email && props.errors.email}</Text>
                                   <View style={globalStyles.buttonContainer}>
                                    <FlatButton text={I18t.t('ForgotPassword.button.cancel')} onPress={() => {
                                        navigation.navigate('SignIn');
                                    }}
                                                style={globalStyles.cancelButton} />
                                    <FlatButton text={I18t.t('ForgotPassword.button.go')} onPress={() => {
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
