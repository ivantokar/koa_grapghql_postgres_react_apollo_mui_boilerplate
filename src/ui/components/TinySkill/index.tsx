import React from 'react'
import { Box, ButtonProps } from '@material-ui/core'
import useStyles from './style'
import { Add } from '@material-ui/icons'
import TinyButton from '../TinyButton'
import classNames from 'classnames'

export interface ITinySkillProps {
    count: number
    skillColor?: 'grey' | 'green'
}

type Props = ButtonProps & ITinySkillProps

const TinySkill: React.FunctionComponent<Props> = ({
    value,
    count,
    skillColor,
    ...buttonProps
}) => {
    const classes = useStyles()

    if (skillColor === undefined) {
        skillColor = 'grey'
    }

    return (
        <TinyButton
            color="default"
            variant="contained"
            endIcon={<Add />}
            {...buttonProps}
        >
            <Box className={classNames(classes.container, classes[skillColor])}>
                {value} <Box className={classes.count}>{count}</Box>
            </Box>
        </TinyButton>
    )
}

export default TinySkill
