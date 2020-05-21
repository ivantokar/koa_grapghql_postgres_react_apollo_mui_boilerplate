import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.typography.pxToRem(60),
        background: theme.palette.common.white,
        boxShadow: theme.shadows[4],
    },
}))

export default useStyles
