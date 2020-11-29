import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        subAreas: [SubArea!]!
        subAreaById (id: ID!): [SubArea!]!
    }

    extend type Mutation {
        createSubArea(areaId: String, name: String!, abstract: String): SubArea!
        updateSubArea(id: String!, areaId: String, name: String, abstract: String): SubArea
        updateSubAreaRoutes(id: String!, routeIds: [ID]): SubArea
        deleteSubArea(id: String!): Boolean!
    }

    type SubArea {
        id: ID!
        areaId: String,
        name: String,
        abstract: String,
        routeIds: [ID],
        routes: [Route]
    }
`