import { model } from "mongoose"
import { PoiType, RouteType, SubAreaType, AreaType, TopicType } from '@pkg/controller'
import { PoiSchema } from './poi'
import { RouteSchema } from './route'
import { SubAreaSchema } from './subArea'
import { AreaSchema } from './area'
import { TopicSchema } from './topic'

export const Poi = model<PoiType>('Poi', PoiSchema)
export const Route = model<RouteType>('Route', RouteSchema)
export const SubArea = model<SubAreaType>('SubArea', SubAreaSchema)
export const Area = model<AreaType>('Area', AreaSchema)
export const Topic = model<TopicType>('Topic', TopicSchema)
