import React from 'react'
import { Box, BoxProps } from '@material-ui/core'
import { useStyles } from './style'
import classNames from 'classnames'

interface IBlockProps extends BoxProps {
    color?: 'white' | 'grey'
}

const Block: React.FunctionComponent<IBlockProps> = ({
    color,
    children,
    ...boxProps
}) => {
    const classes = useStyles()

    if (color === undefined) {
        color = 'white'
    }

    return (
        <Box
            p={2}
            mb={1}
            className={classNames(classes.root, classes[color])}
            {...boxProps}
        >
            {children}
        </Box>
    )
}

export default Block
