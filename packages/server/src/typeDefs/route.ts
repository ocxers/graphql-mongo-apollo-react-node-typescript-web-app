import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        routes: [Route!]!
        routeById (id: ID!): [Route!]!
    }

    extend type Mutation {
        createRoute(name: String!, abstract: String): Route!
        updateRoute(id: String!, name: String, abstract: String): Route
        deleteRoute(id: String!): Boolean!
    }

    type Route {
        id: ID!
        name: String,
        abstract: String,
        pois: [Poi],
        subAreas: [SubArea]
    }
`