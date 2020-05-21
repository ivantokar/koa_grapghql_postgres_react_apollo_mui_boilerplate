import bcrypt from 'bcryptjs'

/**
 * Returns encrypted password
 *
 * @param {string} password
 * @returns {string}
 */
export const hashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(password, salt)
}
