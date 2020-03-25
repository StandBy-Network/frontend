import React, { useContext } from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";
import TextLink from "../../components/TextLink";
import {AuthContext} from "../../routes/AuthProvider";
import I18t from '../../translations';
import Icon from "react-native-vector-icons/FontAwesome";

const loginSchema = yup.object({
    name: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('SignIn.usernameError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    password: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('SignIn.passwordError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
});

export default function SignInScreen({ navigation }) {
    const {login} = useContext(AuthContext);
    return (
        <Container title={I18t.t('SignIn.containerHeader')}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.content}>
                    <View>
                        <Text style={globalStyles.header}>{I18t.t('SignIn.header').toUpperCase()}</Text>
                    </View>
                    <View style={globalStyles.form}>
                        <Formik
                            initialValues={{ name: '', password: '' }}
                            validationSchema={loginSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <Text style={globalStyles.redTitle}>{I18t.t('SignIn.header')}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('SignIn.username')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="**************"
                                               value={props.values.name}
                                               onChangeText={props.handleChange('name')}
                                               onBlur={props.handleBlur('name')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.name && props.errors.name}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('SignIn.password')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="**************"
                                               value={props.values.password}
                                               secureTextEntry={true}
                                               onChangeText={props.handleChange('password')}
                                               onBlur={props.handleBlur('password')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.password && props.errors.password}</Text>
                                </View>
                            )}
                        </Formik>
                    </View>
                    <View style={globalStyles.centerButtonContainer}>
                        <FlatButton text={I18t.t('SignIn.button.signIn')} onPress={() => {
                            //  props.handleSubmit;
                            login();
                            //  navigation.navigate("Main")
                        }} style={globalStyles.actionButtonCenter}/>
                        <TextLink text={I18t.t('SignIn.button.forgottenPassword')} onPress={() => {
                            navigation.navigate("ForgotPassword")
                        }} style={globalStyles.textLinkCenter}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
}
