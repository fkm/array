# @fkm/array
Generic handlers for array functions.

With actions!

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

### Sorters
* ascendingDates

## License
Copyright 2020 Florian Mäder - Permission granted under the [MIT license](LICENSE).
