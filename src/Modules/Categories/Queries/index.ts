import gql from 'graphql-tag';

export const getCategoriesFilterByItemQuery = gql `
query getCategoriesFilterByItemQuery($itemId: Int!) {
    categories(itemId: $itemId) {
        id
        name
    }
}`