import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import useStyles from './style'

export interface IResponsiveDialogProps {
    isOpen: boolean
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
    title: string
}

/**
 * Responsive common dialog
 */
const ResponsiveDialog: React.FunctionComponent<IResponsiveDialogProps> = ({
    isOpen,
    maxWidth,
    title,
    children,
}) => {
    const classes = useStyles()
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    /**
     * Closes dialog
     */
    const handleClose = () => {}

    return (
        <Dialog
            fullWidth
            scroll="body"
            fullScreen={fullScreen}
            open={isOpen}
            onClose={handleClose}
            maxWidth={maxWidth}
        >
            <DialogTitle className={classes.dialogTitle}>
                {title}
                <IconButton
                    aria-label="Close"
                    onClick={handleClose}
                    className={classes.closeDialog}
                >
                    <Close />
                </IconButton>
            </DialogTitle>

            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
}

export default ResponsiveDialog
