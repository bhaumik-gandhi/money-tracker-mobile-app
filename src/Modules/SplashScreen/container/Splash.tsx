import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

class Splash extends Component {

    componentDidMount(props: any = this.props) {
        setTimeout(() => {
            props.navigation.navigate('App');
        }, 1000);
    }

    render() {
        const { container } = styles;

        return (
            <View style={container}>
                <Text>
                    MoneyTracker
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});

export default Splash;