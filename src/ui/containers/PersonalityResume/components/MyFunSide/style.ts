import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    separator: {
        display: 'inline-block',
        color: theme.palette.divider,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
}))

export default useStyles
