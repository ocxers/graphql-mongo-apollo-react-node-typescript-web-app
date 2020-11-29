import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        topics: [Topic!]!
        topicById (id: ID!): [Topic!]!
    }

    extend type Mutation {
        createTopic(
            name: String!,
            cityName: String!,
            abstract: String,
            status: String,
            content: String,
            smallCover: String,
            largeCover: String
        ): Topic!
        updateTopic(
            id: String!,
            name: String,
            cityName: String,
            abstract: String,
            status: String,
            content: String,
            smallCover: String,
            largeCover: String
        ): Topic
        deleteTopic(id: String!): Boolean!
    }

    type Topic {
        id: ID!
        name: String,
        cityName: String,
        abstract: String,
        status: String,
        smallCover: String,
        largeCover: String,
        areas(name: String): [Area]
    }
`