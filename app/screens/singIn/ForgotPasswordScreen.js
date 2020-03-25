import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import * as yup from "yup";
import {Formik} from "formik";
import FlatButton from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";
import I18t from '../../translations';
import Icon from "react-native-vector-icons/FontAwesome";

const pwSchema = yup.object({
    email: yup.string()
        .email(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('ForgotPassword.emailError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>)
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('ForgotPassword.emailError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>)
});

export const ForgotPasswordScreen = ({ navigation }) => {

    return(
        <Container title={I18t.t('SignIn.containerHeader')}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.content}>
                    <View>
                        <Text style={globalStyles.header}>{I18t.t('ForgotPassword.header').toUpperCase()}</Text>
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
                                    <Text style={globalStyles.redTitle}>{I18t.t('ForgotPassword.title')}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('ForgotPassword.label')}</Text>
                                    <TextInput style={globalStyles.textInput}
                                               placeholder="**************"
                                               value={props.values.password}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.email && props.errors.email}</Text>

                                </View>
                            )}
                        </Formik>
                    </View>
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
            </TouchableWithoutFeedback>
        </Container>
    )
};
