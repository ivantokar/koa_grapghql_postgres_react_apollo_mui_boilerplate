import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: theme.typography.pxToRem(12),
    },

    grey: {
        backgroundColor: theme.palette.grey['300'],
    },

    green: {
        backgroundColor: theme.palette.secondary.main,
    },

    gold: {
        backgroundColor: '#C19C00',
    },
}))

export default useStyles
