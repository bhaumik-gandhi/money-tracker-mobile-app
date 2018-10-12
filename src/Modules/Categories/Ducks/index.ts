import { GET_CATEGORIES } from '../Types';

import gqlClient from '../../../GraphQL';
import { getCategoriesFilterByItemQuery } from '../Queries';

export const getCategoriesByItem =  (itemId: number) => {
    return async (dispatch: any) => {
        try {
            const { data }: any = await gqlClient.query({
                query: getCategoriesFilterByItemQuery,
                variables: {
                    itemId
                }
            })
            console.log('CATEGORIES', data);
            
            dispatch({
                type: GET_CATEGORIES,
                payload: data.categories || []
            });
        } catch (e) {
            console.error(e);
        }
    }
}