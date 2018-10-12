import { GET_ITEMS } from '../Types';

import gqlClient from '../../../GraphQL';
import { getItemsQuery } from '../Queries';

export const getItems =  () => {
    return async (dispatch: any) => {
        try {
            const { data }: any = await gqlClient.query({
                query: getItemsQuery,
            })
           
            dispatch({
                type: GET_ITEMS,
                payload: data.items || []
            });
        } catch (e) {
            console.error(e);
        }
    }
}