import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './style'

export interface IListNumberedProps {
    list: string[]
}

const ListNumbered: React.FunctionComponent<IListNumberedProps> = ({
    list,
}) => {
    const classes = useStyles()

    return (
        <>
            {list.map((i, index) => (
                <Box className={classes.item} key={index}>
                    <Box className={classes.number}>{++index}.</Box>
                    <Box className={classes.value}>{i}</Box>
                </Box>
            ))}
        </>
    )
}

export default ListNumbered
