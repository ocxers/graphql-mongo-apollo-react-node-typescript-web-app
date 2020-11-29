import { IResolvers } from 'apollo-server-express'
import { Area, SubArea } from '../models'

const areaResolvers: IResolvers = {
  Query: {
    areas: () => Area.find(),
    areaById: async (
      _: string,
      args: { id: string }
    ) => {
      const area = await Area.find({
        _id: args.id
      })

      return area
    }
  },
  Area: {
    subAreas (parent) {
      return SubArea.find({ areaId: parent.id })
    },
    subAreaCount (parent) {
      return SubArea.count({ areaId: parent.id })
    }
  },
  Mutation: {
    createArea: async (
      _: string,
      args: {
        topicId: string,
        name: string,
        abstract?: string
      }
    ) => {
      const area = new Area(args)
      await area.save()
      return area
    },
    updateArea: async (
      _: string,
      args: {
        id: string,
        topicId: string,
        name: string,
        abstract?: string
      }
    ) => {
      await Area.updateOne({
        _id: args.id
      }, {
        topicId: args.topicId,
        name: args.name,
        abstract: args.abstract
      })

      return args
    },
    deleteArea: async (
      _: string,
      args: {
        id: string
      }
    ) => {
      await Area.deleteOne({
        _id: args.id
      })

      return true
    }
  }
}

export default areaResolvers