import { IResolvers } from 'apollo-server-express'
import { SubArea, Route } from '../models'

const subAreaResolvers: IResolvers = {
  Query: {
    subAreas: () => SubArea.find(),
    subAreaById: async (
      _: string,
      args: { id: string }
    ) => {
      const subArea = await SubArea.find({
        _id: args.id
      })

      return subArea
    }
  },
  SubArea: {
    routes (parent) {
      return Route.find({ _id: { $in: parent.routeIds } })
    }
  },
  Mutation: {
    createSubArea: async (
      _: string,
      args: {
        areaId: string,
        name: string,
        abstract?: string
      }
    ) => {
      const subArea = new SubArea(args)
      await subArea.save()
      return subArea
    },
    updateSubArea: async (
      _: string,
      args: {
        id: string,
        areaId: string,
        name: string,
        abstract?: string
      }
    ) => {
      await SubArea.updateOne({
        _id: args.id
      }, {
        areaId: args.areaId,
        name: args.name,
        abstract: args.abstract
      })

      return args
    },
    updateSubAreaRoutes: async (
      _: string,
      args: {
        id: string,
        routeIds: [string]
      }
    ) => {
      await SubArea.updateOne({
        _id: args.id
      }, {
        routeIds: args.routeIds
      })

      return SubArea.findById(args.id)
    },
    deleteSubArea: async (
      _: string,
      args: {
        id: string
      }
    ) => {
      await SubArea.deleteOne({
        _id: args.id
      })

      return true
    }
  }
}

export default subAreaResolvers