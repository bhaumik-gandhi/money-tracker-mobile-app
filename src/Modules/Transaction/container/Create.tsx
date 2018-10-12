import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Picker, DatePicker } from 'native-base';
import { connect } from 'react-redux';

// Import actions
import { getItems } from '../../Items/Ducks';
import { getCategoriesByItem } from '../../Categories/Ducks'


class Create extends Component {
    state = {
        language: '',
        chosenDate: new Date(),
    }    

    componentDidMount() {
        this.props.getItems();
        this.props.getCategoriesByItem(1);
    }

    setDate = (date: string) => {
        this.setState({
            chosenDate: date
        })
    }

    renderPickerItems = (items: any[]) => {

        return items.map(item => {
            return (
                <Picker.Item label={item.name} value={item.name} key={item.name}/>
            );
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
                    selectedValue={this.state.language}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                >
                    <Picker.Item label="Select" value="" />
                    {this.renderPickerItems(this.props.items)}
                </Picker>
            </View>
        );
    }
}

const mapStateToProps = (state: any) => {
    const { items } = state
    
    return { items:  items.items }
}

export default connect(mapStateToProps, {
    getItems,
    getCategoriesByItem
})(Create);