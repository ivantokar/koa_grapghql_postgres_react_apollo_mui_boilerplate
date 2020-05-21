import bcrypt from 'bcryptjs'

/**
 * Compare two passwords plain text and password from database
 *
 * @param password
 * @param dbPassword
 * @returns {any}
 */
export const comparePasswords = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
}
