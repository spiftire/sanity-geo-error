# Sanity Geo Namespace Error Demo

This repository contains a minimal Sanity Studio application that demonstrates an issue with the `geo` namespace in GROQ queries when generating TypeScript types.

## The Issue

When running the type generation command, the following error occurs:

```bash
✗ Error generating types for query "getPropertiesWithin10KM" in "./queries/properties.ts": Undefined namespace: geo
```

This happens because the `geo` namespace used in GROQ queries (like `geo.distance()`) isn't properly recognized during the type generation process, despite being a valid part of the GROQ language.

## Project Structure

- `/queries/properties.ts`: Contains GROQ queries using the geo namespace
- `/schemaTypes`: Contains the Sanity schema definitions
- `sanity.config.ts`: Sanity configuration file

## Steps to Reproduce

1. Clone this repository
2. Install dependencies with `pnpm install`
3. Run `pnpm generate-types`

## Expected Behavior

The type generator should recognize `geo` as a valid GROQ namespace and generate appropriate TypeScript types.

## Environment Information

- Sanity Version: 3.92.0
- Node Version: 22.14.0

## Related Resources

- [Sanity GROQ Documentation](https://www.sanity.io/docs/groq)
- [Sanity Geo-related Functions](https://www.sanity.io/docs/groq-functions#geo-related-functions)
