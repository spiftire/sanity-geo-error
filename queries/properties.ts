import {defineQuery} from 'groq'

export const getProperties = defineQuery(`
*[_type == "property"]`)
export const getPropertiesWithin10KM = defineQuery(`
*[_type == "property" && geo::distance(geoPoint, $currentLocation) < 10000]`)
