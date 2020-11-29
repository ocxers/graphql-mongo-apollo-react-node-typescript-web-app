import { Document } from 'mongoose'
import { Timestamp } from './common'

export interface TopicType extends Timestamp, Document {
  name: string
  cityName: string
  abstract: string
  status: string
  content: string
  smallCover: string
  largeCover: string
}