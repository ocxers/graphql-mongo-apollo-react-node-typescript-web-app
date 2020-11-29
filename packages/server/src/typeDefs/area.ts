import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        areas: [Area!]!
        areaById (id: ID!): [Area!]!
    }

    extend type Mutation {
        createArea(topicId: String, name: String!, abstract: String): Area!
        updateArea(id: String!, topicId: String, name: String, abstract: String): Area
        deleteArea(id: String!): Boolean!
    }

    type Area {
        id: ID!
        topicId: ID,
        name: String,
        abstract: String,
        subAreaCount: Int,
        subAreas: [SubArea]
    }
`