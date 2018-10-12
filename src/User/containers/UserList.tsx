import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
// import { mapValues } from lodash;

import { getUserList, selectUser } from '../ducks';
import { User } from '../models';

class UserList extends Component {
    static navigationOptions = {
        title: 'Users',
    };
    
    dataSource = [];

    constructor(props: any) {
        super(props);
        props.getUserList();
    }

    goToUserDetailPage = (user: User) => {
        this.props.selectUser(user, this.props.navigation);
    }

    getSubString = (text: string = '', startIndex: number = 0, endIndex: number = 1) => {
        return text.substring(0, 1);
    }

    stickyHeader = (item) => {
        console.log("item", item);
        const { listNameStyle, textStyle} = styles;

        return <View style={[listNameStyle, { justifyContent: 'center', margin: 5 }]} key={item}>
            <Text style={[textStyle, { color: '#00e' }]}>
                A
            </Text>
        </View>
    }

    renderUser = ({ item }) => {
        const { listNameStyle, textStyle} = styles;
        const { userListObj } = this.props.userGroupedObject;

        let renderRow = [
            <View style={[listNameStyle, { justifyContent: 'center', margin: 5 }]} key={item}>
                <Text style={[textStyle, { color: '#00e' }]}>
                    {item}
                </Text>
            </View>
        ]

        userListObj[item].children.map((user: any, index: number) => {
            renderRow.push(this.renderRow(user, index + Math.random()));
        });

        return renderRow;
    }

    renderRow = (user: any, key: number) => {
        
        const { listNameStyle, shortNameContainer, textStyle} = styles;

        return (
            <View style={listNameStyle} key={key}> 
                <View style={shortNameContainer}>
                    <Text style={textStyle}>{this.getSubString(user.firstName, 0, 1)}</Text>
                    <Text style={textStyle}>{this.getSubString(user.lastName, 0, 1)}</Text>                
                </View>               
                
                <TouchableOpacity onPress={() => this.goToUserDetailPage(user)}>
                    <Text style={textStyle}>{ user.firstName + ' ' + user.lastName }</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { userGroupedObject } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={userGroupedObject.alphbates}
                    renderItem={(alphabate) => this.renderUser(alphabate)}
                    keyExtractor={(user, index) => index.toString()}
                />

                <Button onPress={this.props.getUserList} title='Fetch Another' />      
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listNameStyle : {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',    
    },
    shortNameContainer: {
        flexDirection: 'row',
        marginRight: 12,
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
        borderRadius: 100,
        padding: 10,
        alignItems:'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18
    },
    shortName: {
        fontWeight: '900'
    }
});

const sortUserList = (userList: []) => {

    // Sort user list by first name 
    const sortedUserList =  userList.sort((a, b) => a.firstName.localeCompare(b.firstName));
    // Group name alphbatially
    let usersGroupByAlphbatically = sortedUserList.reduce((r, e) => {
        let group = e.firstName[0];
        if(!r[group]) {
            r[group] = {group, children: [e]}  
        } else  {
            r[group].children.push(e);
        }
        return r;
    }, {});
    let availAlphaFromUsers: string[] = [];

    Object.keys(usersGroupByAlphbatically).map((value: string) => {
        availAlphaFromUsers.push(value);
    });

    return {
        alphbates: availAlphaFromUsers,
        userListObj: usersGroupByAlphbatically,
    }

}

const mapStateToProps = (state: any) => {
    const { users } = state;
    // console.log('map to state', users.userList.users);
    if (users.userList.users) {
        return { userGroupedObject: sortUserList(users.userList.users) };
    } else {
        return {
            userGroupedObject: {
                alphbates: [],
                userListObj: {},
            }
        }
    }
}

export default connect(mapStateToProps, { getUserList, selectUser })(UserList);