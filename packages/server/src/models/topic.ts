import { Schema } from 'mongoose'

export const TopicSchema = new Schema({
  name: String,
  cityName: String,
  abstract: String,
  status: String,
  content: String,
  smallCover: String,
  largeCover: String
}, {
  timestamps: true
  }
)