import React from 'react';
import {Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {globalStyles} from "../../styles/globalStyles";
import {Formik} from "formik";
import FlatButton from "../../components/Button";
import {Container} from "../../components/Container";
import * as yup from "yup";

const profileSchema = yup.object({
    surname: yup.string()
        .required("Vezetéknév megadása kötelező!"),
    name: yup.string()
        .required('Keresztnév megadása kötelező!'),
    email: yup.string()
        .email('Kérem, helyes emailcímet adjon meg!')
        .required('Emailcím megadása kötelező!'),
    phone: yup.string()
        .required('Telefonszám megadása kötelező!'),
    mobile: yup.string()
        .required('Mobilszám megadása kötelező!'),
    password: yup.string()
        .required('Település megadása kötelező!'),
    newPassword: yup.string()
        .required('Új jelszó'),
    newPasswordAgain: yup.string()
        .required('Új jelszó újra')
});



export const ProfileScreen = () => {

    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={globalStyles.header}>PROFILOM</Text>
                    </View>
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
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Vezetéknév"
                                               value={props.values.surname}
                                               onChangeText={props.handleChange('surname')}
                                               onBlur={props.handleBlur('surname')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.surname && props.errors.surname}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Keresztnév"
                                               value={props.values.name}
                                               onChangeText={props.handleChange('name')}
                                               onBlur={props.handleBlur('name')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.name && props.errors.name}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="E-mail cím"
                                               value={props.values.email}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.email && props.errors.email}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Telefonszám"
                                               value={props.values.phone}
                                               onChangeText={props.handleChange('phone')}
                                               onBlur={props.handleBlur('phone')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.phone && props.errors.phone}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Mobilszám"
                                               value={props.values.mobile}
                                               onChangeText={props.handleChange('mobile')}
                                               onBlur={props.handleBlur('mobile')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.mobile && props.errors.mobile}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Jelszó"
                                               value={props.values.password}
                                               onChangeText={props.handleChange('password')}
                                               onBlur={props.handleBlur('password')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.password && props.errors.password}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Új jelszó"
                                               value={props.values.newPassword}
                                               onChangeText={props.handleChange('newPassword')}
                                               onBlur={props.handleBlur('newPassword')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={globalStyles.errorText} >{props.touched.newPassword && props.errors.newPassword}</Text>
                                    <TextInput style={globalStyles.textInputRed}
                                               placeholder="Új jelszó ismét"
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
