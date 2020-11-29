import { Document } from 'mongoose'
import { Timestamp } from './common'

export interface SubAreaType extends Timestamp, Document {
  areaId: string
  name: string
  abstract: string
  routeIds: [string]
}