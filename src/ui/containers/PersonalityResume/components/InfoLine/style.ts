import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: theme.spacing(0.2),
        paddingBottom: theme.spacing(0.2),
    },

    label: {
        ...theme.typography.caption,
        // fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.palette.grey['600'],
        // letterSpacing: -0.3,
    },

    value: {
        paddingLeft: theme.spacing(3),
        fontWeight: 'bold',
    },
}))

export default useStyles
