import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles} from "../../styles/globalStyles";
import {Formik} from "formik";
import FlatButton from "../../components/Button";
import {Container} from "../../components/Container";
import * as yup from "yup";
import I18t from "../../translations";
import Icon from "react-native-vector-icons/FontAwesome";

const profileSchema = yup.object({
    surname: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('Profile.surnameError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    name: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('Profile.nameError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    email: yup.string()
        .email(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('Profile.emailValid')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>)
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('Profile.emailError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    phone: yup.string(),
    mobile: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('Profile.mobileError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    password: yup.string()
        .required(<View style={globalStyles.errorContainer}>
            <Text>{I18t.t('Profile.passwordError')}</Text>
            <Icon name="warning" style={globalStyles.errorIcon} />
        </View>),
    newPassword: yup.string()
        .required('A beírt jelszavak nem egyeznek!'),
    newPasswordAgain: yup.string()
        .required('A beírt jelszavak nem egyeznek!')
});



export const ProfileScreen = () => {

    return (
        <Container title={I18t.t('Profile.containerHeader')}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={globalStyles.form}>
                        <Formik
                            initialValues={{ surname: '', name: '', email: '', phone: '',
                                mobile: '', password: '', newPassword: '', newPasswordAgain: '' }}
                            validationSchema={profileSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.surname')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Kovács"
                                               value={props.values.surname}
                                               onChangeText={props.handleChange('surname')}
                                               onBlur={props.handleBlur('surname')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.surname && props.errors.surname}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.name')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="János"
                                               value={props.values.name}
                                               onChangeText={props.handleChange('name')}
                                               onBlur={props.handleBlur('name')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.name && props.errors.name}</Text>
                                    <Text style={globalStyles.redTitle}>{I18t.t('Profile.contact')}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.email')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="email@email.hu"
                                               value={props.values.email}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.email && props.errors.email}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.phone')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="+36123456789"
                                               value={props.values.phone}
                                               onChangeText={props.handleChange('phone')}
                                               onBlur={props.handleBlur('phone')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.phone && props.errors.phone}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.mobile')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="+36301234567"
                                               value={props.values.mobile}
                                               onChangeText={props.handleChange('mobile')}
                                               onBlur={props.handleBlur('mobile')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.mobile && props.errors.mobile}</Text>
                                    <Text style={globalStyles.redTitle}>{I18t.t('Profile.password')}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.password')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="***********"
                                               value={props.values.password}
                                               onChangeText={props.handleChange('password')}
                                               onBlur={props.handleBlur('password')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.password && props.errors.password}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.newPassword')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="***********"
                                               value={props.values.newPassword}
                                               onChangeText={props.handleChange('newPassword')}
                                               onBlur={props.handleBlur('newPassword')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.newPassword && props.errors.newPassword}</Text>
                                    <Text style={globalStyles.label}>{I18t.t('Profile.newPasswordAgain')}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="***********"
                                               value={props.values.newPasswordAgain}
                                               onChangeText={props.handleChange('newPasswordAgain')}
                                               onBlur={props.handleBlur('newPasswordAgain')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.newPasswordAgain && props.errors.newPasswordAgain}</Text>
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
