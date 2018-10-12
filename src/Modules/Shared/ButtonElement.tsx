import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ButtonElements = (props: any) => {
    const { title, style, onPress } = props;
    const { buttonStyle, titleStyle, containerStyle } = styles

    return (
        <Button
            title={title}
            titleStyle={titleStyle}
            buttonStyle={[ buttonStyle, style ]}
            containerStyle={containerStyle}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 18
    },
    titleStyle: {
        fontSize: 18,
        alignSelf: 'center'
    },
    containerStyle: {
        marginTop: 5,
        flex: 1,
        width: '100%'
    }
});

export { ButtonElements };
