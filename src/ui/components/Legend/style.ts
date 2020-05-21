import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        ...theme.typography.body1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        height: theme.typography.pxToRem(30),
        color: theme.palette.grey[600],
        textTransform: 'uppercase',
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 600,
    },
}))

export default useStyles
