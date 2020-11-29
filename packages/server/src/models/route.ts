import { Schema } from 'mongoose'

export const RouteSchema = new Schema(
  {
    subAreaId: String,
    name: String,
    abstract: String
  },
  {
    timestamps: true
  }
)