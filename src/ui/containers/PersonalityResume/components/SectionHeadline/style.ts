import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core'

const SECTION_HEIGHT = 44

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: theme.typography.pxToRem(SECTION_HEIGHT),
        position: 'relative',

        '&:before': {
            content: `" "`,
            width: '100%',
            height: theme.typography.pxToRem(SECTION_HEIGHT / 2 + 2),
            position: 'absolute',
            top: 0,
            left: 0,
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
    },

    titleContainer: {
        composes: '$column',
        ...theme.typography.body1,
        fontWeight: 400,
        fontSize: theme.typography.pxToRem(18),
        color: theme.palette.grey[600],
        paddingRight: theme.spacing(2),
    },

    askForContainer: {
        composes: '$column',
        ...theme.typography.caption,
        textTransform: 'uppercase',
        fontSize: theme.typography.pxToRem(11),
        color: theme.palette.grey[600],
        paddingLeft: theme.spacing(2),
    },

    childrenContainer: {
        composes: '$column',
        paddingLeft: theme.spacing(1),
    },

    column: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        height: theme.typography.pxToRem(SECTION_HEIGHT),
        backgroundColor: '#fff',
    },
}))

export default useStyles
