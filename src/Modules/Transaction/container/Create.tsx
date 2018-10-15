import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Picker, DatePicker } from 'native-base';
import { connect } from 'react-redux';

// Import actions
import { getItems } from '../../Items/Ducks';
import { getCategoriesByItem } from '../../Categories/Ducks'

// Import custom Elements
import { RadioButtonElement, InputElement, ButtonElements } from '../../Shared';

class Create extends Component {
    state = {
        chosenDate: new Date(),
        item: '',
        category: '',
        type: 'debit',
        amount: ''
    }
    
    transactionTypes = [
        {
            value: 'debit',
            name: 'Debit'
        },
        {
            value: 'credit',
            name: 'Credit'
        }
    ];

    componentDidMount() {
        this.props.getItems();
    }

    setDate = (date: string) => {
        this.setState({
            chosenDate: date
        })
    }

    renderPickerItems = (items: any[]) => {
        return items.map(item => {
            return (
                <Picker.Item label={item.name} value={item.id} key={item.name}/>
            );
        })
    }

    getCategory = (itemValue: number) => {
        console.log("itemValue", itemValue);
        if (itemValue) {
            this.props.getCategoriesByItem(itemValue);
        }
        this.setState({
            item: itemValue
        })
    }

    selectOption = (type: string) => {
        this.setState({
            type
        })
    }

    saveTransaction = () => {
        console.log('state', this.state);
    }

    onChangeText = (label: string, value: string | number) => {
       this.setState({
           [label]: value
       })        
    }

    render() {       
        return (
            <View>
                <DatePicker
                    defaultDate={this.state.chosenDate}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={true}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                />
                
                <Picker
                    selectedValue={this.state.item}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.getCategory(itemValue)}
                >
                    <Picker.Item label="Select Type" value="" />
                    {this.renderPickerItems(this.props.items)}
                </Picker>

                <Picker
                    selectedValue={this.state.category}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ category: itemValue })}
                >
                    <Picker.Item label="Select Category" value="" />
                    {this.renderPickerItems(this.props.categories)}
                </Picker>

                <RadioButtonElement
                    horizontal={true}
                    options={this.transactionTypes}
                    selectOption={this.selectOption}
                    selectedOption={this.transactionTypes[0]}
                />

                <View style={{paddingRight: 8, paddingLeft: 8}}>
                    <InputElement
                        placeholder='Amount'
                        keyboardType='numeric'
                        value={this.state.amount}
                        onChangeText={(value: string) => this.onChangeText('amount', parseFloat(value).toFixed(2))}
                    />

                    <ButtonElements 
                        title='Save'
                        onPress={this.saveTransaction}
                    />
                </View>
            
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { items, categories } = state

    return { items:  items.items, categories: categories.categories }
}

export default connect(mapStateToProps, {
    getItems,
    getCategoriesByItem
})(Create);