import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: theme.typography.pxToRem(60),
    },

    copyright: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.typography.pxToRem(60),
        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.grey[500],
    },
}))

export default useStyles
