import React from 'react';
import { StyleSheet , TextInput, View, Text } from 'react-native';

const InputElement = (props: any) => {
    const { label, keyboardType = 'default', placeholder = '', secureTextEntry = false, onChangeText = () => {} } = props;
    const { inputStyle, containerStyle, inputContainer } = styles;

    return (
        <View style={containerStyle}>
            <Text>
                {label}
            </Text>
            <View style={inputContainer}>
                <TextInput
                    style={inputStyle}            
                    underlineColorAndroid='transparent'
                    keyboardType= { keyboardType}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    inputContainer: {
        borderColor: '#ddd',
        borderWidth: 1
    },
    inputStyle: {
        backgroundColor: '#fff',
        borderWidth: 0,
        padding: 10,
        fontSize: 18
    }
});

export { InputElement };