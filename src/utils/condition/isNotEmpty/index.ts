import _ from 'lodash'

/**
 * Checks if value is not empty object, collection, map, or set.
 *
 * @param value
 * @returns {boolean}
 * @link https://lodash.com/docs/4.17.15#isEmpty
 */
export function isNotEmpty(value: any) {
    return !_.isEmpty(value)
}
