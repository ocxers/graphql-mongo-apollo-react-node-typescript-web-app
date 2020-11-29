import { Document } from 'mongoose'
import { Timestamp } from './common'

export interface RouteType extends Timestamp, Document {
  subAreaId: string
  name: string
  abstract: string
}