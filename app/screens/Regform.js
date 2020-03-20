import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from "../components/Button";

const regSchema = yup.object({
    phone: yup.string()
        .required('Telefonszám megadása kötelező!'),
    email: yup.string()
        .email('Kérem, helyes emailcímet adjon meg!')
        .required('Emailcím megadása kötelező!'),
    name: yup.string()
        .required('Név megadása kötelező!'),
    place: yup.string()
        .required('Település megadása kötelező!')
});

export default function Regform() {

    return (
        <View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Text style={styles.header}>Regisztráció</Text>
                    </View>
                    <View style={styles.regform}>
                        <Formik
                            initialValues={{ phone: '', email: '', name: '', place: '' }}
                            validationSchema={regSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}>
                            {(props) => (
                                <View>
                                    <TextInput style={styles.textinput}
                                               placeholder="Telefonszám"
                                               value={props.values.phone}
                                               onChangeText={props.handleChange('phone')}
                                               onBlur={props.handleBlur('phone')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={styles.errorText} >{props.touched.phone && props.errors.phone}</Text>
                                    <TextInput style={styles.textinput}
                                               placeholder="Email"
                                               value={props.values.email}
                                               onChangeText={props.handleChange('email')}
                                               onBlur={props.handleBlur('email')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={styles.errorText} >{props.touched.email && props.errors.email}</Text>
                                    <TextInput style={styles.textinput}
                                               placeholder="Felhasználónév"
                                               value={props.values.name}
                                               onChangeText={props.handleChange('name')}
                                               onBlur={props.handleBlur('name')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={styles.errorText} >{props.touched.name && props.errors.name}</Text>
                                    <TextInput style={styles.textinput}
                                               placeholder="Cím (település)"
                                               value={props.values.place}
                                               onChangeText={props.handleChange('place')}
                                               onBlur={props.handleBlur('place')}
                                               underlineColorAndroid={'transparent'} />
                                    <Text style={styles.errorText} >{props.touched.place && props.errors.place}</Text>
                                    <FlatButton text="Regisztráció" onPress={props.handleSubmit} />
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
        marginRight: 20,
        marginLeft: 20
    },
    header: {
        alignSelf: 'stretch',
        fontSize: 24,
        color: '#fff',
        padding: 10,
        marginBottom: 40,
        borderBottomColor: '#269EFC',
        borderBottomWidth: 1,
        backgroundColor: '#269EFC'
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    errorText: {
        color: '#E73F25',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
});
