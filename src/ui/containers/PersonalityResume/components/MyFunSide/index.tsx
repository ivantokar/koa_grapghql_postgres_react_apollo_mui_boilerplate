import React from 'react'
import { SectionHeadline } from '../index'
import { FaceSmile } from '@components/Icons'
import { Box, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import useStyles from './style'

export const MyFunSide: React.FunctionComponent = () => {
    const classes = useStyles()

    return (
        <Box mb={5}>
            <SectionHeadline title="My Fun Side" icon={<FaceSmile />}>
                <IconButton>
                    <Edit fontSize="small" />
                </IconButton>
            </SectionHeadline>

            <Box>
                <strong>Sense of humor</strong>
                <Box className={classes.separator}>|</Box>
                <strong>Play with my dogs</strong>
                <Box className={classes.separator}>|</Box>
                <strong>Working out</strong>
                <Box className={classes.separator}>|</Box>
                <strong>Baseball</strong>
                <Box className={classes.separator}>|</Box>
                <strong>Football</strong>
            </Box>
        </Box>
    )
}
