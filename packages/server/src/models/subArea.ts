import { Schema } from 'mongoose'

export const SubAreaSchema = new Schema(
  {
    areaId: String,
    name: String,
    abstract: String,
    routeIds: [String]
  },
  {
    timestamps: true
  }
)
