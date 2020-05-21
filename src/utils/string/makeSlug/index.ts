import slugify from 'slugify'

/**
 * Returns string as a slug
 *
 * @param {string} string
 * @returns {string}
 */
export const makeSlug = (string: string) => {
    const options = {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        remove: undefined, // remove characters that match regex, defaults to `undefined`
        lower: true, // convert to lower case, defaults to `false`
        strict: false, // strip special characters except replacement, defaults to `false`
    }

    // TODO: need to check duplicates in DB and generate new or with number -1, -n+1
    return slugify(string, options)
}
