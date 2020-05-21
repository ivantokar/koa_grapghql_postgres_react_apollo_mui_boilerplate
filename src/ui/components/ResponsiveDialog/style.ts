import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    dialogTitle: {
        borderBottom: `1px solid ${theme.palette.grey[50]}`,
        margin: 0,
        padding: theme.spacing(2),
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            '& h6': {
                textAlign: 'left',
                paddingRight: theme.typography.pxToRem(30),
                fontSize: theme.typography.pxToRem(16),
            },
        },
    },

    dialogContent: {
        padding: theme.spacing(3),
    },

    closeDialog: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}))

export default useStyles
