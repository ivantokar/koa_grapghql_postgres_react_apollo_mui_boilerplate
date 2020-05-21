import { fade, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        border: `1px solid ${fade(theme.palette.grey['100'], 0.3)}`,
        borderRadius: theme.shape.borderRadius,
        // boxShadow: theme.shadows[5],
    },

    white: {
        backgroundColor: '#fff',
    },

    grey: {
        backgroundColor: fade(theme.palette.grey['100'], 0.5),
        border: `1px solid ${fade(theme.palette.grey['100'], 0.6)}`,
    },
}))
