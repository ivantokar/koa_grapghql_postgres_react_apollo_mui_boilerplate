import { Button, ButtonProps } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

const TinyButton: React.FunctionComponent<ButtonProps> = ({
    children,
    ...buttonProps
}) => {
    const classes = useStyles()

    return (
        <Button className={classes.root} {...buttonProps}>
            {children}
        </Button>
    )
}

export default TinyButton
