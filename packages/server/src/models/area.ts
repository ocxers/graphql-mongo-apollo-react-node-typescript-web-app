import { Schema } from 'mongoose'

export const AreaSchema = new Schema(
  {
    topicId: String,
    name: String,
    abstract: String
  },
  {
    timestamps: true
  }
)