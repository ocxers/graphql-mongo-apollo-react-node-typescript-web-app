import { Document } from 'mongoose'
import { Timestamp } from './common'

export interface PoiType extends Timestamp, Document {
  routeId: string
  name: string
  abstract: string
}