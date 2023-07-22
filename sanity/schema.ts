import {type SchemaTypeDefinition } from 'sanity'
import { data } from './frontend_basic'
import { playlist } from './playlist'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [data,playlist],
}


