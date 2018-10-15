import React from 'react';
import {Text, StyleSheet } from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import { TransactionTypes } from '../Transaction/Models';


const RadioButtonElement = (props: any) => {
    const { container } :any = styles;
    const { horizontal = false, options = [], selectOption, selectedOption } = props;
    let containerStyle = {
        flexDirection: 'column'
    };
    let selectedIndex = -1;

    if (horizontal) {
        containerStyle.flexDirection = 'row';
    }

    const renderOptions = () => {
        return options.map((option: TransactionTypes) => <RadioButton key={option.value} value={option.value} >
            <Text>{option.name}</Text>
        </RadioButton>);
    }

    if (selectedOption) {
        selectedIndex = options.findIndex(option => option.value = selectedOption.value);
    }

    return (
            <RadioGroup
                style={[container, containerStyle]}
                onSelect = {(index, value) => selectOption(value)}
                selectedIndex={selectedIndex}
            >
                {renderOptions()}
            </RadioGroup>
        );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
});

export { RadioButtonElement }