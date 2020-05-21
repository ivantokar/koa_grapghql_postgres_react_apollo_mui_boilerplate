import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        height: theme.typography.pxToRem(55),
        fontWeight: 'bold',
        textDecoration: 'none',
        color: theme.palette.common.black,

        '& img': {
            maxWidth: theme.typography.pxToRem(132),
        },

        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
}))

export default useStyles
