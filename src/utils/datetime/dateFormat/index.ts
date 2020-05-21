import moment, { MomentInput } from 'moment'

/**
 * Formats datetime
 *
 * @param {moment.MomentInput} input
 * @param {string} template
 * @returns {string}
 */
export const dateFormat = (input: MomentInput, template: string) => {
    return moment(input).format(template)
}
