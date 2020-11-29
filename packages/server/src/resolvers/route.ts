import { IResolvers } from 'apollo-server-express'
import { Route, Poi, SubArea } from '../models'

const routeResolvers: IResolvers = {
  Query: {
    routes: () => Route.find(),
    routeById: async (
      _: string,
      args: { id: string }
    ) => {
      const route = await Route.find({
        _id: args.id
      })

      return route
    }
  },
  Route: {
    pois (parent) {
      return Poi.find({ routeId: parent.id })
    },
    subAreas (parent) {
      return SubArea.find({
        routeIds: { $in: [parent.id] }
      })
    }
  },
  Mutation: {
    createRoute: async (
      _: string,
      args: {
        name: string,
        abstract?: string
      }
    ) => {
      const route = new Route(args)
      await route.save()
      return route
    },
    updateRoute: async (
      _: string,
      args: {
        id: string,
        name: string,
        abstract?: string
      }
    ) => {
      await Route.updateOne({
        _id: args.id
      }, {
        name: args.name,
        abstract: args.abstract
      })

      return args
    },
    deleteRoute: async (
      _: string,
      args: {
        id: string
      }
    ) => {
      await Route.deleteOne({
        _id: args.id
      })

      return true
    }
  }
}

export default routeResolvers