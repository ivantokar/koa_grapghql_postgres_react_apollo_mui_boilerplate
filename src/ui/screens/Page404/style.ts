import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        height: 'calc(100vh - 180px)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.grey[400],
        fontSize: theme.typography.pxToRem(28),
        textTransform: 'uppercase',
    },

    divider: {
        height: theme.typography.pxToRem(50),
        borderLeft: `${theme.typography.pxToRem(1)} solid ${
            theme.palette.grey[300]
        }`,
        marginLeft: theme.typography.pxToRem(30),
        marginRight: theme.typography.pxToRem(30),
    },
}))

export default useStyles
