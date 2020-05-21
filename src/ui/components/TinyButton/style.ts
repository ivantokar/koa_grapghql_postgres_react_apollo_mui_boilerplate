import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: theme.typography.pxToRem(24),
        fontSize: theme.typography.pxToRem(13),
        borderRadius: theme.typography.pxToRem(24),
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: theme.spacing(1),
        fontWeight: 600,

        '& span > svg': {
            width: 16,
            height: 16,
            fontSize: 16,
        },
    },
}))

export default useStyles
