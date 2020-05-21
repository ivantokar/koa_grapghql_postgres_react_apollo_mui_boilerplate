import React from 'react'
import { Box } from '@material-ui/core'
import { BoxProps } from '@material-ui/core/Box'
import useStyles from './style'

const Page: React.FunctionComponent<BoxProps> = ({ children, ...boxProps }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} {...boxProps}>
            {children}
        </Box>
    )
}

export default Page
