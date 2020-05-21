import { Box } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

interface IInfoLIneProps {
    minWidth?: number
    label: string
    value: string
}

export const InfoLine: React.FunctionComponent<IInfoLIneProps> = ({
    minWidth,
    label,
    value,
}) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.label} minWidth={minWidth}>
                {label}
            </Box>
            <Box className={classes.value}>{value}</Box>
        </Box>
    )
}
