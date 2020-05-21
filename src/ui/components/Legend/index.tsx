import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './style'

export interface ILegendProps {
    icon: React.ReactNode
    title: string
}

const Legend: React.FunctionComponent<ILegendProps> = ({ icon, title }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box display="inline-flex" mr={1}>
                {icon}
            </Box>

            {title}
        </Box>
    )
}

export default Legend
