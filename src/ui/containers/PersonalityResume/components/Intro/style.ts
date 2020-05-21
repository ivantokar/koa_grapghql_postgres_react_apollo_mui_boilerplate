import { fade, makeStyles, Theme } from '@material-ui/core/styles'
import cover from '../../img/cover.jpg'

const useStyles = makeStyles((theme: Theme) => ({
    edit: {
        float: 'right',
    },

    cover: {
        border: `1px solid ${fade(theme.palette.secondary.dark, 0.1)}`,
        backgroundClip: 'border-box',
        height: theme.typography.pxToRem(150),
        background: `url(${cover}) no-repeat -1px`,
        borderRadius: theme.shape.borderRadius,
        backgroundSize: 'cover',
    },

    picture: {
        maxWidth: theme.typography.pxToRem(155),
    },

    viewsRoot: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: theme.spacing(3),
    },

    viewsLabel: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: theme.palette.primary.dark,
    },

    viewsIcon: {
        fontSize: 13,
        lineHeight: 0,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(0.5),
        color: theme.palette.primary.dark,
    },

    viewsCount: {
        color: theme.palette.primary.dark,
        fontSize: theme.typography.pxToRem(18),
        fontWeight: 'bold',
        lineHeight: 0,
    },
}))

export default useStyles
