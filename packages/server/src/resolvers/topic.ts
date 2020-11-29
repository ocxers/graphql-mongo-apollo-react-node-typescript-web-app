import { IResolvers } from 'apollo-server-express'
import { Area, Topic } from '../models'

const _ = require('lodash')

const topicResolvers: IResolvers = {
  Query: {
    topics: () => Topic.find(),
    topicById: async (
      __: string,
      args: { id: string }
    ) => {
      const topic = await Topic.find({
        _id: args.id
      })

      return topic
    }
  },
  Topic: {
    areas (parent, { name }: { name: string }) {
      const query = {
        topicId: parent.id,
        name: {
          $regex: new RegExp(name, 'i')
        }
      }
      return Area.find(query)
    }
  },
  Mutation: {
    createTopic: async (
      __: string,
      args: {
        name: string,
        cityName: string,
        abstract: string,
        status: string,
        content: string,
        smallCover: string,
        largeCover: string
      }
    ) => {
      const topic = new Topic(args)
      await topic.save()

      return topic
    },
    updateTopic: async (
      __: string,
      args: {
        id: string,
        name: string,
        cityName: string,
        abstract: string,
        status: string,
        content: string,
        smallCover: string,
        largeCover: string
      }
    ) => {
      await Topic.updateOne({
        _id: args.id
      }, _.omit(_.pickBy(args, _.identity), 'id'))

      return Topic.findById({ _id: args.id })
    }
  }
}

export default topicResolvers