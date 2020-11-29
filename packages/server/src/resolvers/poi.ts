import { IResolvers } from 'apollo-server-express'
import { Poi } from '../models'

const poiResolvers: IResolvers = {
  Query: {
    pois: () => Poi.find(),
    poiById: async (
      _: string,
      args: { id: string }
    ) => {
      const poi = await Poi.find({
        _id: args.id
      })

      return poi
    }
  },
  Mutation: {
    createPoi: async (
      _: string,
      args: {
        routeId: string,
        name: string,
        abstract?: string
      }
    ) => {
      const poi = new Poi(args)
      await poi.save()
      return poi
    },
    updatePoi: async (
      _: string,
      args: {
        id: string,
        routeId: string,
        name: string,
        abstract?: string
      }
    ) => {
      await Poi.updateOne({
        _id: args.id
      }, {
        name: args.name,
        routeId: args.routeId,
        abstract: args.abstract
      })

      return args
    },
    deletePoi: async (
      _: string,
      args: {
        id: string
      }
    ) => {
      await Poi.deleteOne({
        _id: args.id
      })

      return true
    }
  }
}

export default poiResolvers