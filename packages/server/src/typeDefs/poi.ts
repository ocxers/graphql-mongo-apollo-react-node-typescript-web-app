import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        pois: [Poi!]!
        poiById (id: ID!): [Poi!]!
    }

    extend type Mutation {
        createPoi(routeId: String, name: String!, abstract: String): Poi!
        updatePoi(id: String!, routeId: String, name: String, abstract: String): Poi
        deletePoi(id: String!): Boolean!
    }

    type Poi {
        id: ID!
        routeId: ID,
        name: String,
        abstract: String
    }
`