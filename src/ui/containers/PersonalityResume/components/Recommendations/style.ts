import { fade, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {},

    itemRoot: {
        backgroundColor: theme.palette.grey['50'],
    },

    hidden: {
        backgroundColor: fade('#eee9ef', 0.7),
    },

    author: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
}))

export default useStyles
