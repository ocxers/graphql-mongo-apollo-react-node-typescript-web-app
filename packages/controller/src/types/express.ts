import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import { Session } from 'express-session'

export type Request = ExpressRequest & {
  session: Session & {
    userId: string
  }
}

export type Response = ExpressResponse