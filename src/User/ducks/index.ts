import { GET_USER_LIST, SELECT_USER } from '../types';
import gqlClient from '../../GraphQL';
import { User } from '../models';
import { GET_USERS } from '../queries'

export const getUserList = () => {
    return async (dispatch: any) => {
        try {
            const usersData = await gqlClient.query({
                query: GET_USERS,
                fetchPolicy: 'network-only',
            });

            dispatch({ type: GET_USER_LIST, payload: usersData.data });
    
        } catch (e) {
            console.error(e);
        }
    }
}

export const selectUser = (user: User, navigation: any)=> {
    return (dispatch: any) => {
        dispatch({
            type: SELECT_USER,
            payload: user
        });
        
        navigation.navigate('UserDetail', {});
    }
}