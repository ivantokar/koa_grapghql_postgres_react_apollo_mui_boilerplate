import { makeStyles, Theme } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-block',
    },

    small: {
        width: theme.typography.pxToRem(30),
        height: theme.typography.pxToRem(30),

        '& $icon': {
            display: 'none',
        },
    },

    medium: {
        width: theme.typography.pxToRem(60),
        height: theme.typography.pxToRem(60),

        '& $icon': {
            fontSize: theme.typography.pxToRem(20),
        },
    },

    large: {
        width: theme.typography.pxToRem(140),
        height: theme.typography.pxToRem(140),
    },

    fluid: {
        width: '100%',
    },

    picture: {
        background: fade(theme.palette.grey[50], 0.2),
        borderRadius: '50%',
        position: 'relative',

        '& img': {
            width: '100%',
            borderRadius: '50%',
            verticalAlign: 'middle',
            backgroundSize: 'cover',
            backgroundPosition: '100%',
            backgroundRepeat: 'no-repeat',
        },
    },

    editablePicture: {
        transition: theme.transitions.create(''),
        background: fade(theme.palette.grey[50], 0.2),
        borderRadius: '50%',
        border:
            theme.typography.pxToRem(1) + ' dashed ' + theme.palette.grey[200],
        position: 'relative',
        cursor: 'pointer',

        '& img': {
            width: '100%',
            borderRadius: '50%',
            verticalAlign: 'middle',
            backgroundSize: 'cover',
            backgroundPosition: '100%',
            backgroundRepeat: 'no-repeat',
        },

        '&:hover': {
            borderColor: theme.palette.grey[300],
            boxShadow: theme.shadows[5],
        },
    },

    icon: {
        fontSize: theme.typography.pxToRem(40),
        color: theme.palette.grey[600],
        borderRadius: '50%',
        background: '#fff',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
}))

export default useStyles
