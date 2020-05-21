import { isNotEmpty } from '../..'

/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 *
 * @param {any[]} $collection
 * @returns {any[]}
 */
export function compact($collection: any[]) {
    if (isNotEmpty($collection)) {
        return $collection.filter(
            (i) =>
                i !== false &&
                i !== '' &&
                i !== undefined &&
                i !== null &&
                i !== 0
        )
    }

    return []
}
