import _ from 'lodash'

/**
 * Find an item in the collection
 *
 * @param {any[] | object} $collection
 * @param {string} $item
 * @returns {boolean}
 */
export function has($collection: any[] | object, $item: string) {
    return Boolean(_.includes($collection, $item))
}
