import React from 'react'
import { Chip } from '@material-ui/core'
import useStyles from './style'
import classNames from 'classnames'

export type TagVariantType = 'grey' | 'green' | 'gold'

export interface ITagProps {
    variant?: TagVariantType
}

const Tag: React.FunctionComponent<ITagProps> = ({ children, variant }) => {
    const classes = useStyles()

    if (variant === undefined) {
        variant = 'grey'
    }

    return (
        <Chip
            size="small"
            label={children}
            className={classNames(classes.root, classes[variant])}
        />
    )
}

export default Tag
