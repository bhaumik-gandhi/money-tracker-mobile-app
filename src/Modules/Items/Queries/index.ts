import gql from 'graphql-tag';

export const getItemsQuery = gql `{
    items {
        id
        name
    }
}`