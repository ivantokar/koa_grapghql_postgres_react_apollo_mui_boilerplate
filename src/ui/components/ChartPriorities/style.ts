import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    name: {
        height: theme.typography.pxToRem(24),
        fontSize: theme.typography.pxToRem(12),
        lineHeight: theme.typography.pxToRem(24),
        textTransform: 'uppercase',
        borderRadius: theme.typography.pxToRem(24),
        backgroundColor: theme.palette.grey['400'],
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        marginBottom: theme.spacing(2),
        fontWeight: 600,
        color: '#fff',
    },

    item: {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    },

    title: {
        display: 'flex',
        alignItems: 'center',
        minHeight: theme.typography.pxToRem(26),
        fontSize: theme.typography.pxToRem(12),
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
    },

    progress: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: theme.typography.pxToRem(26),
        borderLeft: `1px solid ${theme.palette.divider}`,
    },

    chart: {
        height: theme.typography.pxToRem(12),
        backgroundColor: theme.palette.grey['50'],
        position: 'relative',
        borderRadius: 2,
    },

    filled: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: theme.typography.pxToRem(12),
        backgroundColor: theme.palette.primary.main,
        borderRadius: 2,
    },

    green: {
        backgroundColor: theme.palette.secondary.main,
    },
}))

export default useStyles
