/**
 * Generates a random string for passwords, hash, etc.
 *
 * @param {number} length
 * @returns {string}
 */
export const randomString = (length: number) => {
    let result = ''

    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }

    return result
}
