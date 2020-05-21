import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: 'calc(100vh - 120px)', // 60px height of a header and footer
        paddingTop: theme.typography.pxToRem(theme.spacing(5)),
        paddingBottom: theme.typography.pxToRem(theme.spacing(10)),

        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.typography.pxToRem(theme.spacing(3)),
            paddingBottom: theme.typography.pxToRem(theme.spacing(5)),
        },
    },
}))

export default useStyles
