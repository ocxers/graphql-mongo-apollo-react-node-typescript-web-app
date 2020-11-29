import { Schema } from 'mongoose'

export const PoiSchema = new Schema(
  {
    routeId: String,
    name: String,
    abstract: String
  },
  {
    timestamps: true
  }
)