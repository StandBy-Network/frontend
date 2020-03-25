import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from "../../components/Button";
import {globalStyles} from "../../styles/globalStyles";
import {Container} from "../../components/Container";
import I18t from "../../translations";
import Icon from "react-native-vector-icons/FontAwesome";


const regSchema = yup.object({
    phone: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('SignUp.phoneError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    email: yup.string()
        .email(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('SignUp.emailValid')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>)
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('SignUp.emailError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    name: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('SignUp.nameError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    zip: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('SignUp.zipError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>)
});

export default function SignUpScreen() {

    return (
        <Container title={I18t.t('SignUp.containerHeader')}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.content}>
                    <View>
                        <Text style={globalStyles.header}>{I18t.t('SignUp.title')}</Text>
                    </View>
                    <View style={globalStyles.form}>
                        <Formik
                            initialValues={{ phone: '', email: '', name: '', place: '' }}
                            validationSchema={regSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput style={globalStyles.textInput}
                                               placeholder={I18t.t('SignUp.name')}
                                               value={props.values.name}
                                               onChangeText={props.handleChange('name')}
                                               onBlur={props.handleBlur('name')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.name && props.errors.name}</Text>
                                    <TextInput style={globalStyles.textInput}
                                               placeholder={I18t.t('SignUp.email')}
                                               value={props.values.email}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.email && props.errors.email}</Text>
                                    <TextInput style={globalStyles.textInput}
                                               placeholder={I18t.t('SignUp.phone')}
                                               value={props.values.phone}
                                               onChangeText={props.handleChange('phone')}
                                               onBlur={props.handleBlur('phone')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.phone && props.errors.phone}</Text>
                                    <TextInput style={globalStyles.textInput}
                                               placeholder={I18t.t('SignUp.zip')}
                                               value={props.values.zip}
                                               onChangeText={props.handleChange('zip')}
                                               onBlur={props.handleBlur('zip')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.zip && props.errors.zip}</Text>
                                </View>
                            )}
                        </Formik>
                    </View>
                    <View style={globalStyles.centerButtonContainer}>
                        <FlatButton text={I18t.t('SignUp.button')}
                                    style={globalStyles.actionButtonCenter}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container>
    );
}
