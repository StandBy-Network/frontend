import React from 'react';
import {CheckBox, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import * as yup from "yup";
import I18t from "../../../translations";
import {Container} from "../../../components/Container";
import {globalStyles} from "../../../styles/globalStyles";
import {Formik} from "formik";
import FlatButton from "../../../components/Button";

const requestSchema = yup.object({
    request: yup.string()
        .required(I18t.t('CreateRequest.requestError'))
});

export const CreateRequestScreen = ({ navigation }) => {

    return (
        <Container title={I18t.t('CreateRequest.menuTitle')}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={globalStyles.header}>{I18t.t('CreateRequest.header')}</Text>
                    </View>
                    <View style={globalStyles.form}>
                        <Formik
                            initialValues={{ request: '' }}
                            validationSchema={requestSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput style={globalStyles.textInput}
                                               placeholder={I18t.t('CreateRequest.placeholder')}
                                               value={props.values.request}
                                               onChangeText={props.handleChange('request')}
                                               onBlur={props.handleBlur('request')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.request && props.errors.request}</Text>
                                    <CheckBox />
                                    <View style={globalStyles.buttonContainer}>
                                        <FlatButton text={I18t.t('CreateRequest.button.cancel')} onPress={() => {
                                            navigation.navigate('Main');
                                        }}
                                                    style={globalStyles.cancelButton} />
                                        <FlatButton text={I18t.t('CreateRequest.button.ok')}
                                                    onPress={props.handleSubmit}
                                                    style={globalStyles.actionButton}/>
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
