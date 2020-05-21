import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minWidth: 110,
        marginTop: theme.typography.pxToRem(-11),
        marginBottom: theme.typography.pxToRem(-11),
    },

    switchLabel: {
        fontSize: 12,
        color: theme.palette.primary.dark,
        textTransform: 'uppercase',
    },
}))

export default useStyles
