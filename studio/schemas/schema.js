import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import { userSchema } from './userSchema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
  userSchema
  ]),
})
