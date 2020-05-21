import React from 'react'
import classNames from 'classnames'
import { Typography, Box, makeStyles, Theme } from '@material-ui/core'
import {
    WarningRounded,
    CheckCircle,
    Error,
    Info,
    Help,
    HourglassFullTwoTone,
} from '@material-ui/icons'
import { amber, blue, blueGrey, green, red } from '@material-ui/core/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'
import useStyles from './style'

export interface ICallOutIconProps {
    variant:
        | 'info'
        | 'warning'
        | 'error'
        | 'success'
        | 'help'
        | 'submitting'
        | 'pointer'
    size?: 'small' | 'large'
}

const Icon: React.FunctionComponent<ICallOutIconProps> = ({
    variant,
    size,
}) => {
    const classes = useStyles()

    switch (variant) {
        case 'info':
            return (
                <Info
                    className={classNames(
                        classes.icon,
                        classes.info,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
        case 'warning':
            return (
                <WarningRounded
                    className={classNames(
                        classes.icon,
                        classes.warning,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
        case 'error':
            return (
                <Error
                    className={classNames(
                        classes.icon,
                        classes.error,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
        case 'success':
            return (
                <CheckCircle
                    className={classNames(
                        classes.icon,
                        classes.success,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
        case 'help':
            return (
                <Help
                    className={classNames(
                        classes.icon,
                        classes.help,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
        case 'submitting':
            return (
                <HourglassFullTwoTone
                    className={classNames(
                        classes.icon,
                        classes.success,
                        classes.rotated,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
        case 'pointer':
            return (
                <FontAwesomeIcon
                    icon={faHandPointer}
                    className={classNames(
                        classes.icon,
                        classes.pointer,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
        default:
            return (
                <Info
                    className={classNames(
                        classes.icon,
                        classes.info,
                        size === 'small' && classes.iconSmall
                    )}
                />
            )
    }
}

const CallOut: React.FunctionComponent<ICallOutIconProps> = (props) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Icon {...props} />

            <Typography
                className={classNames(
                    classes.message,
                    classes[props.variant],
                    props.size ? classes[props.size] : classes.default
                )}
            >
                {props.children}
            </Typography>
        </Box>
    )
}

export default CallOut
