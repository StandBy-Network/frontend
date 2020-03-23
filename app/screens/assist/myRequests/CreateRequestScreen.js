import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import * as yup from "yup";
import I18t from "../../../translations";
import {Container} from "../../../components/Container";
import {globalStyles} from "../../../styles/globalStyles";
import {Formik} from "formik";
import FlatButton from "../../../components/Button";

const requestSchema = yup.object({
    request: yup.string()
        .required(I18t.t('SignUp.phoneError'))
});

export const CreateRequestScreen = () => {

    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={globalStyles.header}>{I18t.t('SignUp.title')}</Text>
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
                                    <TextInput style={globalStyles.textinput}
                                               placeholder={I18t.t('SignUp.zip')}
                                               value={props.values.zip}
                                               onChangeText={props.handleChange('zip')}
                                               onBlur={props.handleBlur('zip')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.zip && props.errors.zip}</Text>
                                    <FlatButton text={I18t.t('SignUp.button')} onPress={props.handleSubmit} style={globalStyles.actionButtonCenter}/>
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    )
};
