# @fkm/array
Generic handlers for array functions.

## Usage
* `npm install --save-dev @fkm/array`
* `import { isDefined } from '@fkm/array'`
* `[1, 2, , 4].filter(isDefined)` returns [1, 2, 4]

## Handlers
### Filters
* isDefined
* isNotEmptyString
* keepUniqueValues
* keepUniqueDates

### Reducers
* concatArrays
* concatNestedArrays
* mergeObjects
* sumNumbers

### Sorters
* ascendingDates

## License
Copyright 2024 Florian Mäder - Permission granted under the [MIT license](LICENSE).
