import { makeStyles, Theme } from '@material-ui/core/styles'
import { amber, blue, blueGrey, green, red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
    },

    default: {
        fontSize: theme.typography.pxToRem(theme.spacing(2)),
        lineHeight: theme.typography.pxToRem(theme.spacing(3)),
    },

    small: {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(20),
    },

    large: {
        fontSize: theme.typography.pxToRem(20),
        lineHeight: theme.typography.pxToRem(theme.spacing(3)),
    },

    icon: {
        marginRight: theme.typography.pxToRem(theme.spacing(1)),
        verticalAlign: 'bottom',
    },

    iconSmall: {
        fontSize: theme.typography.pxToRem(20),
    },

    message: {
        display: 'inline-block',
        verticalAlign: 'bottom',
    },

    info: {
        fill: blue[600],
        color: blue[700],
    },

    warning: {
        fill: amber[700],
        color: amber[800],
    },

    error: {
        fill: red[600],
        color: red[700],
    },

    success: {
        fill: green[600],
        color: green[700],
    },

    help: {
        fill: blueGrey[600],
        color: blueGrey[700],
    },

    submitting: {
        fill: blueGrey[600],
        color: blueGrey[700],
    },

    pointer: {
        fill: blueGrey[400],
        color: blueGrey[400],
        fontStyle: 'italic',
        fontSize: theme.typography.pxToRem(13),

        '&$icon': {
            fontSize: theme.typography.pxToRem(20),
        },
    },

    '@keyframes spin': {
        '100%': {
            transform: 'rotate(360deg)',
        },
    },

    rotated: {
        animation: '$spin 1s linear infinite',
    },
}))

export default useStyles
