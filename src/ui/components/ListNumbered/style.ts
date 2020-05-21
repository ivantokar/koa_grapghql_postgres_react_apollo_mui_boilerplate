import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: `1px dotted ${theme.palette.grey['200']}`,
        height: theme.typography.pxToRem(35),
    },

    number: {
        color: theme.palette.grey['300'],
        marginRight: theme.spacing(2),
    },

    value: {
        ...theme.typography.body2,
        fontWeight: 'bold',
    },
}))

export default useStyles
