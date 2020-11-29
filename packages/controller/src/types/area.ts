import { Document } from 'mongoose'
import { Timestamp } from './common'

export interface AreaType extends Timestamp, Document {
  topicId: string
  name: string
}