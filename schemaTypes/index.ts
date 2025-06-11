import {defineType} from 'sanity'

const locationSchema = defineType({
  name: 'property',
  title: 'Property',
  description: 'A property with a geographical location',
  type: 'document',
  fields: [{title: 'Location', name: 'location', type: 'geopoint'}],
})

export const schemaTypes = [locationSchema]
