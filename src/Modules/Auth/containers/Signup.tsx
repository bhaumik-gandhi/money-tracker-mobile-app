import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


import { InputElement, ButtonElements }  from '../../Shared';

class Signup extends Component {
    handleSignup = () => {
        try {
            this.props.navigation.navigate('LoginScreen');
        } catch(e) {
            console.error(e);
        }
    }

    render() {
        const { 
            container, 
            inputContainer, 
            signupTextContainer, 
            signupText,
            buttonContainer
        } = styles;

        return (
            <View style={container}>
                <View style={inputContainer}>
                    <InputElement 
                        label = 'Name'
                    />
                    <InputElement 
                        label = 'Email'
                        keyboardType='email-address'
                    />
                    <InputElement 
                        label = 'Password'
                        secureTextEntry={true}
                    />
                </View>

                <View style={buttonContainer}>
                    <ButtonElements 
                        title='Signup'
                    />
                </View>

                <View style={signupTextContainer}>
                    <Text style={signupText}>Or </Text>
                    <TouchableOpacity onPress={this.handleSignup}>
                        <Text style={[signupText, {fontWeight: '900'}]}>Login</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        flexDirection: 'column'
        // justifyContent: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    buttonContainer: {
        width: '80%'
    },
    signupTextContainer: {
        flexDirection: 'row',
        width: '80%',
        marginTop: 50
    },
    signupText: {
        fontSize: 18,
        color: '#bbb'
    }
});

export default Signup;