import { fade, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    green: {
        backgroundColor: theme.palette.secondary.main,
    },

    grey: {
        backgroundColor: theme.palette.grey['300'],
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 24,
        color: '#fff',
        marginLeft: theme.spacing(-2),
        marginRight: 0,
        borderRadius: theme.typography.pxToRem(24),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontSize: theme.typography.pxToRem(12),
    },

    count: {
        fontSize: theme.typography.pxToRem(11),
        color: fade(theme.palette.common.black, 0.7),
        paddingLeft: theme.spacing(1),
    },
}))

export default useStyles
