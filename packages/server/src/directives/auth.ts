import { SchemaDirectiveVisitor } from 'apollo-server-express'
import { GraphQLField, defaultFieldResolver } from 'graphql'

class AuthDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field

    field.resolve = function(...args) {
      return resolve.apply(this, args)
    }
  }
}

export default AuthDirective
