import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './style'
import { AskFor } from '@components/Icons'

export interface ISectionHeadlineProps {
    icon?: React.ReactNode
    title: string
    askFor?: string
}

export const SectionHeadline: React.FunctionComponent<ISectionHeadlineProps> = ({
    icon,
    title,
    askFor,
    children,
}) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} mb={2}>
            <Box className={classes.titleContainer}>
                {icon && (
                    <Box display="inline-flex" mr={1}>
                        {icon}
                    </Box>
                )}
                {title}
            </Box>

            <Box display="flex" flexDirection="row" justifyContent="flex-end">
                {Boolean(askFor) && (
                    <Box className={classes.askForContainer}>
                        <Box mr={1 / 2}>{askFor}</Box>
                        <AskFor />
                    </Box>
                )}
                <Box className={classes.childrenContainer}>{children}</Box>
            </Box>
        </Box>
    )
}
